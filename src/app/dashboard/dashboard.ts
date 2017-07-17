import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/heroes/model/hero';
import { HeroAction } from 'app/heroes/service/hero.action';
import { HeroStore } from 'app/store/hero/hero.store';
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
    private heroAction: HeroAction,
    private heroStore: HeroStore) {
  }

  ngOnInit(): void {
    console.log("dashboard init");
    this.heroAction.dataInit();
    this.heroStore.heros.subscribe(
      heroes => this.heroes = heroes.slice(0, 6)
    );
  }

  gotoDetail(hero: Hero): void {
    const link = ['heroes/detail', hero.id];
    this.router.navigate(link);
  }
}
