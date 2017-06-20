import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from 'app/component/heroDetail/hero.detail.component';
import { HeroListComponent } from 'app/component/heroList/hero.list.component';
import { DashboardComponent } from 'app/component/dashboard/dashboard.component';

// コンポーネントとURLを関連づける
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'list', component: HeroListComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
