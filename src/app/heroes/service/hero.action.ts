import { Injectable } from '@angular/core';

import { Hero } from 'app/heroes/model/hero';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

import { HeroService } from './hero.service';
import { HeroStore } from 'app/store/hero/hero.store';

@Injectable()
export class HeroAction {
  constructor(private heroService: HeroService, private heroStore: HeroStore) {}

  dataInit(): void {
    this.heroService.getHeroes()
      .then(heroes =>
        this.heroStore.setHeros(heroes)
      );
  }
}
