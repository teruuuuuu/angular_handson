import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from 'app/component/heroDetail/hero.detail.component';

// コンポーネントとURLを関連づける
const routes: Routes = [
  { path: '', redirectTo: '/detail/1', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
