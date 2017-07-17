import { NgModule } from '@angular/core';

import { HeroService} from './hero.service';
import { HeroAction} from './hero.action';

@NgModule({
  providers: [ HeroService,  HeroAction ]
})
export class HeroesServiceModule { }
