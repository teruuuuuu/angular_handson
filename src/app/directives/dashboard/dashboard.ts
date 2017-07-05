import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/model/hero/hero';
import { HeroAction } from 'app/action/hero/hero.action';
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
    this.heroAction.dataInit();
    this.heroStore.heros.subscribe(
      heroes => this.heroes = heroes.slice(0, 6)
    );
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
