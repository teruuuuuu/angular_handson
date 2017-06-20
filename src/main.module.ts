import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //テンプレートでバインディングしたり、validationするのに必要

import { AppComponent } from 'index.component';
import { HeroDetailComponent } from 'app/component/heroDetail/hero.detail.component';
import { HeroListComponent } from 'app/component/heroList/hero.list.component';
import { DashboardComponent } from 'app/component/dashboard/dashboard.component';

import { HeroService } from 'app/service/hero.service';
import { AppRoutingModule } from 'app/router/app.router';

@NgModule({
  imports: [
    AppRoutingModule, // 注意 ルータはdeclationではなくimportsにたす
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
