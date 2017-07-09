import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from "@angular/forms";
import { HttpModule }           from "@angular/http";

import { AppComponent }         from './app.component';
import { DashboardComponent }   from "./dashboard/dashboard.component";
import { HeroesComponent }      from "./heroes/heroes.component";
import { HeroDetailComponent }  from "./hero-detail/hero-detail.component";
import { HeroService }          from "./services/hero.service";
import { AddHeroComponent }     from "./add-hero/add-hero.component";
import { HeroSearchComponent }  from "./hero-search/hero-search.component";

import { AppRoutingModule }     from "./app-routing.module";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from "./in-memory-data.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AddHeroComponent,
    HeroSearchComponent
  ],
  providers:    [
    HeroService
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
