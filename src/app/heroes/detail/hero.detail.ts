import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from 'app/heroes/model/hero';
import { HeroService } from 'app/heroes/service/hero.service';

import {Observable} from "rxjs/Observable";

@Component({
  selector: 'hero-detail', //ディレクティブのタグ名
  templateUrl: './hero.detail.html' //htmlテンプレートの読み込み
})
export class HeroDetailComponent implements OnInit {
  // テンプレートhtmlにbindして使用するクラス変数
  title = 'HeroDetail';
  @Input() hero: Hero = new Hero();

  // コンポーネントを使用する側で用途を決めれるようにする
  @Input() isSearchMode: Boolean = true;


  constructor(
    private heroService: HeroService,
    // urlパラメータを取得するのに必要
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.isSearchMode) {
      // ルータからパラメータ取得
      this.route.params.forEach((params: Params) => {
        console.log("hero detail component ngOnInit");
        console.info(params);
        if (params['id'] !== undefined) {
          const id = +params['id'];
          this.heroService.getHeroById(id)
            .then(hero => this.hero = hero);
        }
      });
    }
  }

  goBack(savedHero: Hero = null): void {
    window.history.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
