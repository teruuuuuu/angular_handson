import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Hero } from 'app/model/Hero';
import { HEROES } from 'app/mock/heros.mock';


// WebAPIを呼んでデータ取得する際にtoPromiseを使用する
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  // angular-in-memory-web-apiで呼び出すAPIのベースURL
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }



  getHeroes(): Promise<Hero[]> {
    console.log("hero service getHeros");
    /*
    console.info(HEROES); // 2wayバインドによりmockオブジェクト自体が変更されていることが確認できる
    return Promise.resolve(HEROES);
    */
    return this.http.get(this.heroesUrl)
      .toPromise()
      // jsonのレスポンスを受け取ってHero型の配列に変換する
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  // id指定でデータ取得
  getHeroById(id: number): Promise<Hero> {
    /*
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
      */
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  // angular-in-memory-web-apiのcreateApi呼び出し
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  // angular-in-memory-web-apiのupdateApi呼び出し
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  // httpリクエスト失敗時の処理
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
