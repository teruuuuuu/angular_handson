import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/model/Hero';
import { HeroService } from 'app/service/hero/hero.service';

import { HeroStore } from 'app/store/hero.store';
import { Observable } from "rxjs";

@Component({
  selector: 'hero-list',
  templateUrl: './hero.list.html',
  styleUrls: ['./hero.list.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  title = 'HeroesList';
  selectedHero: Hero;

  // サービスはconstructorに足しておく
  constructor(
    private router: Router,
    private heroService: HeroService,
    private heroStore: HeroStore) {}

  ngOnInit(): void {
    // 再描画のたびに呼ばれるので、ここでメンバ変数を初期化
    console.log("HeroListComponent ngOnInit")
    this.heroService.setHeroStore();
    this.heroStore.heros.subscribe(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
