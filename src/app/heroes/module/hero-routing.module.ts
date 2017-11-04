import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from '../component/list/hero.list';
import { HeroDetailComponent }  from '../component/detail/hero.detail';
import { HeroViewLayout } from '../layout/sample/hero.view';

const routes: Routes =  [
  /*{ path: '', component: HeroViewLayout }*/
  { path: '',    component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

export const routedComponents = [ HeroListComponent, HeroDetailComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
