import { Component } from "@angular/core";
import { Location } from "@angular/common";

import { Hero } from "../hero";
import {HeroService} from "../services/hero.service";

@Component({
  selector: "add-hero",
  templateUrl: "./add-hero.component.html",
  styleUrls: ["./add-hero.component.css"]
})
export class AddHeroComponent {
  constructor(
    private heroService: HeroService,
    private location: Location
  ) {}

  save(id: number, name: string): void {
    const hero = new Hero(+id, name);
    this.heroService.createHero(hero)
      .then(() => this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}
