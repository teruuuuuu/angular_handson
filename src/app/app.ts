import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HeroDetailComponent } from 'app/heroes/detail/hero.detail';
//import { HeroListComponent } from 'app/heroes/list/hero.list';
//import { DashboardComponent } from 'app/dashboard/dashboard';

// コンポーネントとURLを関連づける
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  //{ path: '', redirectTo: 'heroes', pathMatch: 'full' },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'}
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
