import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PokemonMasterComponent }   from './app.pokemon-master';
import { PokemonTypesMasterComponent }   from './app.pokemon-types-master';
import { PokemonDetailComponent }   from './app.pokemon-detail';
import { ToTitleCase }   from './app.pokemon-detail';
import { AppComponent }   from './app.component';

import { PokemonTypesService }   from './pokemon-types.service';
import { PokemonService }   from './pokemon.service';
import { PokemonSkillsService }   from './pokemon-skills.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
    ],
  declarations: [ 
    AppComponent, 
    PokemonMasterComponent, 
    PokemonDetailComponent, 
    PokemonTypesMasterComponent,
    ToTitleCase,
    ],
  providers: [ PokemonService, PokemonTypesService, PokemonSkillsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
