import { Injectable } from "@angular/core";
import { Hero } from "../hero";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {
  private heroesUrl = "api/heroes";
  private headers = new Headers({ "Content-Type": "application/json"});

  constructor(
    private http: Http
  ) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
       .toPromise()
       .then(response => response.json().data as Hero[])
       .catch(this.handleError)

  }

  private handleError(error: any): Promise<any> {
    console.log("Error occurred: ", error);

    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  createHero(hero: Hero): Promise<any> {
    const url = `${this.heroesUrl}`;
    return this.http.post(url, JSON.stringify(hero), this.headers)
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  updateHero(hero: Hero): Promise<any> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
       .toPromise()
       .then(() => hero)
       .catch(this.handleError);
  }

  deleteHero(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
