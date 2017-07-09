import { Component } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";
import { OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "my-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit  {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes
    );
  }

  viewDetail(): void {
    this.router.navigate(["/detail", +this.selectedHero.id]);
  }

  deleteHero(hero: Hero): void {
    this.heroService
      .deleteHero(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null }
      });
  }
}
