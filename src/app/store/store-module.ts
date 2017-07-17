import { NgModule }      from '@angular/core';

import { HeroStore } from 'app/store/hero/hero.store';

@NgModule({
  imports:      [ ],
  exports:      [ ],
  providers: [ HeroStore ]
})
export class StoreModule { }
