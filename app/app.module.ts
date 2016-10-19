import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroMasterComponent }   from './app.hero-master';
import { HeroDetailComponent }   from './app.hero-detail';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { HeroService }   from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
    ],
  declarations: [ AppComponent, HeroMasterComponent, HeroDetailComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
