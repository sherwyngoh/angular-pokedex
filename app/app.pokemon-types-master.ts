import { Component } from '@angular/core';
import { PokemonType } from './pokemon-type';
import { PokemonTypesService } from './pokemon-types.service'

@Component({
  selector: 'pokemon-types-master',
  template: `
    <div *ngFor="let type of pokemonTypes">
      {{type.ename}}
    </div>
    `,
})


export class PokemonTypesMasterComponent { 
  selectedPokemonType: PokemonType;
  pokemonTypes: PokemonType[];
  
  constructor(private PokemonTypesService: PokemonTypesService) { }

  getPokemonTypes(): void {
    this.PokemonTypesService.getPokemonTypes().then(pokemonTypes => this.pokemonTypes = pokemonTypes);
  };
  
  ngOnInit(): void {
    this.getPokemonTypes();
  };
  
  onSelect(pokemonType: PokemonType): void {
    this.selectedPokemonType = pokemonType;
  };

}


