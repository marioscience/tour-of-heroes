import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location }                 from "@angular/common";

import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get("id")))
      .subscribe(hero => this.hero = hero);

  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

