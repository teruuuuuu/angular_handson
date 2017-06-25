import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from 'app/directives/hero/detail/hero.detail';
import { HeroListComponent } from 'app/directives/hero/list/hero.list';
import { DashboardComponent } from 'app/directives/dashboard/dashboard';

// コンポーネントとURLを関連づける
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'list', component: HeroListComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppComponent {}
