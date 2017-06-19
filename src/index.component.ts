import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/model/Hero';
import { HeroService } from 'app/service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AppComponent implements OnInit {
  textInput = "input test";
  hero: Hero = new Hero();

  constructor(
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.hero = this.heroService.getSyncHero(1);
  }
}
