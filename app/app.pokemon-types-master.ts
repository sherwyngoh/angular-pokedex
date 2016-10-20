import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PokemonType } from './pokemon-type';
import { PokemonTypesService } from './pokemon-types.service'

@Component({
  selector: 'pokemon-types-master',
  templateUrl: 'templates/pokemon-types-master.html',
})


export class PokemonTypesMasterComponent {
  @Input() selectedPokemonTypes: PokemonType[];
  @Output() typeFilter = new EventEmitter();
  pokemonTypes: PokemonType[];
  toggleTypes: false;

  constructor(private PokemonTypesService: PokemonTypesService) { }

  getPokemonTypes(): void {
    this.PokemonTypesService.getPokemonTypes().then(pokemonTypes => this.pokemonTypes = pokemonTypes);
  };
  
  ngOnInit(): void {
    this.getPokemonTypes();
    this.selectedPokemonTypes = [];
  };
  
  toggle(pokemonType: PokemonType): void {
    const index = this.selectedPokemonTypes.indexOf(pokemonType);
    if (index === -1) {
      this.selectedPokemonTypes.push(pokemonType);
      this.typeFilter.emit({
        value: this.selectedPokemonTypes
      })

    } else {
      this.selectedPokemonTypes.splice(index, 1);
      this.typeFilter.emit({
        value: this.selectedPokemonTypes
      })
    }
  };

  getColor(type: string): string {
    const colors = {
      Grass: '#7ac74c',
      Normal: '#A8A77A',
      Fighting: '#C22E28',
      Flying: '#A98FF3',
      Poison: '#A33EA1',
      Ground: '#E2BF65',
      Rock: '#B6A136',
      Bug: '#A6B91A',
      Ghost: '#735797',
      Steel: '#B7B7CE',
      Fire: '#EE8130',
      Water: '#6390f0',
      Electric: '#F7d02C',
      Psychic: '#F95587',
      Ice: '#96D9D6',
      Dragon: '#6F35FC',
      Dark: '#705746',
      Fairy: '#D685AD'
    }
    return colors[type];
  }
}


