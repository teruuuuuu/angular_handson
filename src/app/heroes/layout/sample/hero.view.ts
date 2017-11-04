import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from 'app/heroes/model/hero';
import { HeroService } from 'app/heroes/service/hero.service';

import {Observable} from "rxjs/Observable";

@Component({
  selector: 'hero-view', //ディレクティブのタグ名
  templateUrl: './hero.view.html', //htmlテンプレートの読み込み
  providers: [HeroService]
})
export class HeroViewLayout implements OnInit {
  // テンプレートhtmlにbindして使用するクラス変数
  title = 'HeroDetail';
  @Input() hero: Hero = new Hero();

  constructor(
    private heroService: HeroService,
    // urlパラメータを取得するのに必要
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
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
