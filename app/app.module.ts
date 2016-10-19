import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroMasterComponent }   from './app.hero-master';
import { HeroDetailComponent }   from './app.hero-detail';
import { FormsModule }   from '@angular/forms';
import { HeroService }   from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
    ],
  declarations: [ HeroMasterComponent, HeroDetailComponent ],
  providers: [ HeroService ],
  bootstrap:    [ HeroMasterComponent ]
})
export class AppModule { }
