import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return new Promise((resolve: Function) => {
      setTimeout(() => {
        resolve(HEROES);
      }, 1000);
    });
  }
}
