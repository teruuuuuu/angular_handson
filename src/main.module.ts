import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //テンプレートでバインディングしたり、validationするのに必要
import { HttpModule }    from '@angular/http'; // httpサービスを利用するのに必要
// 今回はWebAPIのモックを使用する
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // npm install --save angular-in-memory-web-api
import { InMemoryDataService }  from 'app/heroes/service/in-memory-data.service';

import { AppComponent } from 'app/app';
import { HeroesServiceModule } from 'app/heroes/service/hero-service.module';
import { StoreModule } from 'app/store/store-module';


@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    //FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule,
    HeroesServiceModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
