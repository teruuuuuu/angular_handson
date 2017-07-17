import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routedComponents, HeroRoutingModule } from './hero-routing.module';
import { HeroesSharedModule } from 'app/heroes/shared/heroes-shared.module';

@NgModule({
  imports: [HeroRoutingModule, SharedModule, HeroesSharedModule],
  declarations: [routedComponents]
})
export class HeroesModule { }
