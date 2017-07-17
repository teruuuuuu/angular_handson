
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {BehaviorSubject} from "rxjs/Rx";

import { Hero } from 'app/heroes/model/hero';

@Injectable()
export class HeroStore {

    private _heros: BehaviorSubject<Hero[]> = new BehaviorSubject([]);

    constructor() {}

    setHeros(heros: Hero[]): void{
      this._heros.next(heros)
    }

    get heros(): Observable<Hero[]> {
        return this.asObservable(this._heros);
    }

    asObservable(subject: BehaviorSubject<Hero[]>) {
        return new Observable(fn => subject.subscribe(fn));
    }
}
