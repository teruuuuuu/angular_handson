import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './list/hero.list';
import { HeroDetailComponent }  from './detail/hero.detail';

const routes: Routes =  [
  { path: '',    component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

export const routedComponents = [ HeroListComponent, HeroDetailComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
