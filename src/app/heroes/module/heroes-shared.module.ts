import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common'; // BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule insteadらしい
import { FormsModule }   from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { HeroSearchComponent } from '../component/search/hero-search';

@NgModule({
  imports:      [ CommonModule, FormsModule, SharedModule ],
  exports:      [ HeroSearchComponent],
  declarations: [ HeroSearchComponent ],
  providers: [ ]
})
export class HeroesSharedModule { }
