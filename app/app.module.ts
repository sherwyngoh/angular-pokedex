import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonMasterComponent }   from './app.pokemon-master';
import { PokemonTypesMasterComponent }   from './app.pokemon-types-master';
import { PokemonDetailComponent }   from './app.pokemon-detail';
import { AppComponent }   from './app.component';
import { PokemonTypesService }   from './pokemon-types.service';
import { PokemonService }   from './pokemon.service';
import { ScrollRevealDirective } from './scroll-reveal.directive'

@NgModule({
  imports:      [ 
    BrowserModule,
    ],
  declarations: [ 
    AppComponent, 
    PokemonMasterComponent, 
    PokemonDetailComponent, 
    PokemonTypesMasterComponent,
    ScrollRevealDirective 
    ],
  providers: [ PokemonService, PokemonTypesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
