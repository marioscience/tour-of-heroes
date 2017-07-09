import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/observable";

import "rxjs/add/operator/map";

import { Hero } from "../hero";

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    let url = `api/heroes/?name=${term}`;

    return this.http.get(url)
               .map((response) => response.json().data as Hero[]);
  }
}
