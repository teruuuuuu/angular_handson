import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/model/Hero';
import { HeroService } from 'app/service/hero/hero.service';

import { HeroStore } from 'app/store/hero.store';
import { Observable } from "rxjs";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private heroStore: HeroStore) {
  }

  ngOnInit(): void {
    this.heroService.setHeroStore();
    this.heroStore.heros.subscribe(
      heroes => this.heroes = heroes.slice(0, 6)
    );
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
