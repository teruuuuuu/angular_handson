import { Component, Input, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { HeroService } from 'app/heroes/service/hero.service';
import { Hero } from 'app/heroes/model/hero';
import { HeroStore } from 'app/store/hero/hero.store';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.html',
  styleUrls: [ './hero-search.css' ],
  providers: [HeroService]
})
export class HeroSearchComponent implements OnInit {
  // heroes: Observable<Hero[]>;
  all_heroes: Hero[] = [];
  search_heroes: Hero[] = [];


  private searchTerms = new Subject<string>();

  textInput: string = "";

  constructor(
    private heroService: HeroService,
    private router: Router,
    private heroStore: HeroStore) {}


  // Push a search term into the observable stream.
  search(term: string): void {
    if(term.trim() == ""){
      this.search_heroes = [];
    }else{
      this.search_heroes = this.all_heroes.filter(h => h.name.search(term) >= 0);
    }
    // console.info(this.heroes);
    // this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroStore.heros.subscribe(
      heroes => this.all_heroes = heroes
    );
    /*　ストアから取り出すように修正する
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
      */
  }

  gotoDetail(hero: Hero): void {
    let link = ['heroes/detail', hero.id];
    this.router.navigate(link);
  }
}
