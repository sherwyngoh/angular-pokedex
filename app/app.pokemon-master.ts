import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemon';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'pokemon-master',
  templateUrl: 'templates/pokemon-master.html'
})


export class PokemonMasterComponent {
  typesFilter: string[];
  toggleFilter: boolean;
  selectedPokemon: Pokemon;
  pokemon: Pokemon[];
  
  constructor(private pokemonService: PokemonService) { }

  getPokemon(): void {
    this.pokemonService.getPokemon().then((pokemon) => {
      this.pokemon = pokemon;
      this.selectedPokemon = pokemon[0];
    });
  };
  
  ngOnInit(): void {
    this.getPokemon();
    this.toggleFilter = true;
  };
  
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  };
}


