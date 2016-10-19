import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemon';
import { PokemonService } from './pokemon.service'

@Component({
  selector: 'pokemon-master',
  templateUrl: 'templates/pokemon-master.html',
  styles: [`

    `]

})


export class PokemonMasterComponent { 
  selectedPokemon: Pokemon;
  pokemon: Pokemon[];
  
  constructor(private pokemonService: PokemonService) { }

  getPokemon(): void {
    this.pokemonService.getPokemon().then(pokemon => this.pokemon = pokemon);
  };
  
  ngOnInit(): void {
    this.getPokemon();
  };
  
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  };
  

}


