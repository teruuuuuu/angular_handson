import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common'; // BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule insteadらしい
import { FormsModule }   from '@angular/forms';
//import { HttpModule }    from '@angular/http'; // httpサービスを利用するのに必要

import { MyTextComponent } from 'app/shared/my-text/MyText';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  exports:      [ CommonModule, FormsModule,
                  MyTextComponent],
  declarations: [ MyTextComponent ],
  providers: [ ]
})
export class SharedModule { }
