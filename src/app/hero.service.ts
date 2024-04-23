import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Action: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find(h => h.id === id);
    if (hero) {
      this.messageService.add(`Action: fetched hero id=${id}`);
      return of(hero);
    } else {
      return of(undefined);
    }
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const index = HEROES.indexOf(hero);
    if (index !== -1) {
      HEROES.splice(index, 1);
    }
    return of(hero);
  }
}
