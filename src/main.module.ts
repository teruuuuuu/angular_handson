import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //テンプレートでバインディングしたり、validationするのに必要

import { AppComponent } from 'index.component';
import { HeroDetailComponent } from 'app/component/heroDetail/hero.detail.component';

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
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
