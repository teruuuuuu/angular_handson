import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //テンプレートでバインディングしたり、validationするのに必要
import { HttpModule }    from '@angular/http'; // httpサービスを利用するのに必要

// 今回はWebAPIのモックを使用する
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // npm install --save angular-in-memory-web-api
import { InMemoryDataService }  from 'app/service/in-memory-data.service';

import { AppComponent } from 'app/app';
import { HeroDetailComponent } from 'app/directives/hero/detail/hero.detail';
import { HeroListComponent } from 'app/directives/hero/list/hero.list';
import { HeroSearchComponent } from './app/directives/hero/search/hero.search';
import { DashboardComponent } from 'app/directives/dashboard/dashboard';
import { MyTextComponent } from 'app/directives/my-text/MyText';


import { HeroService } from 'app/service/hero.service';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent,
    HeroSearchComponent,
    MyTextComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
