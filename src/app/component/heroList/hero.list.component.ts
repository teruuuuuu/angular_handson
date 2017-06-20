import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/model/Hero';
import { HeroService } from 'app/service/hero.service';


@Component({
  selector: 'hero-list',
  templateUrl: './hero.list.component.html',
  styleUrls: ['./hero.list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  title = 'HeroesList';
  selectedHero: Hero;

  // サービスはconstructorに足しておく
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    // 再描画のたびに呼ばれるので、ここでメンバ変数を初期化
    console.log("HeroListComponent ngOnInit")
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
    /*
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes);
      */
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
}
