import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from 'app/model/Hero';
import { HeroService } from 'app/service/hero.service';


@Component({
  selector: 'hero-detail', //ディレクティブのタグ名
  templateUrl: './hero.detail.component.html' //htmlテンプレートの読み込み
})
export class HeroDetailComponent implements OnInit {
  // テンプレートhtmlにbindして使用するクラス変数
  title = 'HeroDetail';
  hero: Hero = new Hero();

  // コンポーネントを使用する側で用途を決めれるようにする
  isSearchMode: Boolean = true;


  constructor(
    private heroService: HeroService,
    // urlパラメータを取得するのに必要
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if(this.isSearchMode){
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
}
