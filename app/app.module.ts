import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonMasterComponent }   from './app.pokemon-master';
import { PokemonDetailComponent }   from './app.pokemon-detail';
import { AppComponent }   from './app.component';
import { PokemonService }   from './pokemon.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    ],
  declarations: [ AppComponent, PokemonMasterComponent, PokemonDetailComponent ],
  providers: [ PokemonService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
