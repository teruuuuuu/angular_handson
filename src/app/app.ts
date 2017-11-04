import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// コンポーネントとURLを関連づける
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'heroes', loadChildren: 'app/heroes/module/heroes.module#HeroesModule'},
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
