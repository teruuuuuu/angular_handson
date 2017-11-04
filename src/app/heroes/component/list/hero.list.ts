import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from "rxjs";

import { Hero } from 'app/heroes/model/hero';
import { HeroAction } from 'app/heroes/service/hero.action';
import { HeroService } from 'app/heroes/service/hero.service';
import { HeroStore } from 'app/store/hero/hero.store';

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
    private route: ActivatedRoute,
    private heroAction: HeroAction,
    private heroService: HeroService,
    private heroStore: HeroStore) {}

  ngOnInit(): void {
    // 再描画のたびに呼ばれるので、ここでメンバ変数を初期化
    console.log("HeroListComponent ngOnInit")
    this.heroAction.dataInit();
    this.heroStore.heros.subscribe(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['./detail', this.selectedHero.id], {relativeTo: this.route});
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
