import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //テンプレートでバインディングしたり、validationするのに必要
import { HttpModule }    from '@angular/http'; // httpサービスを利用するのに必要

// 今回はWebAPIのモックを使用する
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // npm install --save angular-in-memory-web-api
import { InMemoryDataService }  from 'app/service/in-memory-data.service';

import { AppComponent } from 'index.component';
import { HeroDetailComponent } from 'app/component/heroDetail/hero.detail.component';
import { HeroListComponent } from 'app/component/heroList/hero.list.component';
import { DashboardComponent } from 'app/component/dashboard/dashboard.component';
import { HeroSearchComponent } from './app/component/heroSearch/hero.search.component';

import { HeroService } from 'app/service/hero.service';
import { AppRoutingModule } from 'app/router/app.router';

@NgModule({
  imports: [
    AppRoutingModule, // 注意 ルータはdeclationではなくimportsにたす
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
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
