import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { SharedModule }           from '../shared/shared.module';
import { DashboardComponent }     from './dashboard';
import { HeroesSharedModule } from 'app/heroes/module/heroes-shared.module';

const routes: Routes =  [
  { path: '',  component: DashboardComponent },
];

@NgModule({
  imports:      [
    SharedModule,
    HeroesSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
