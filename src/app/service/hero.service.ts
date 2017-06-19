import { Injectable } from '@angular/core';

import { Hero } from 'app/model/Hero';
import { HEROES } from 'app/mock/heros.mock';



@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    console.log("hero service getHeros");
    console.info(HEROES); // 2wayバインドによりmockオブジェクト自体が変更されていることが確認できる
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  // id指定でデータ取得
  getHeroById(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  // データ共有をするだけの用途とかでPromiseを使わないこともできる
  getSyncHero(id: number): Hero {
    return HEROES.find(hero => hero.id === id);
  }
}
