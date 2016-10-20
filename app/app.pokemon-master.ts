import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonType } from './pokemon-type';
import { PokemonService } from './pokemon.service';
import { PokemonTypesService } from './pokemon-types.service';


@Component({
  selector: 'pokemon-master',
  templateUrl: 'templates/pokemon-master.html'
})


export class PokemonMasterComponent {
  typesFilter: string[];
  nameIdFilter: string;
  toggleFilter: boolean;
  selectedPokemon: Pokemon;
  selectedPokemonTypes: PokemonType[];
  pokemonTypes: PokemonType[];
  pokemon: Pokemon[];

  filteredPokemon: Pokemon[];
  
  constructor(
    private pokemonService: PokemonService,
    private pokemonTypesService: PokemonTypesService, 
    ) { }

  getPokemon(): void {
    this.pokemonService.getPokemon().then((pokemon) => {
      this.pokemon = pokemon;
      this.filteredPokemon = pokemon;
      // this.getPokemonTypes();
      // this.selectedPokemon = pokemon[0];
    });
  };
  
  getPokemonTypes(): void {
    this.pokemonTypesService.getPokemonTypes().then((pokemonTypes)=> {
      this.pokemonTypes = pokemonTypes;
      for ( let i in this.pokemon ) {
        this.pokemon[i] = this.getTypes(this.pokemon[i])
      }
    })
  }

  ngOnInit(): void {
    this.getPokemon();
    this.toggleFilter = false;
    
  };
  
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  };
  
  typeFilterEvent(value): void {
    this.typesFilter = value.value.map((type) => {
      return type.cname;
    });

    this.filteredPokemon = this.pokemon.filter((pokemon) => {
      let remains = true;
      for (let i in pokemon.type) {
        if ( this.typesFilter.indexOf(pokemon.type[i]) != -1 ) {
          remains = false
        }
      }
      return remains
    })
  }

  getTypes(pokemon: Pokemon): Pokemon {
    let result = [];
    for ( let t in pokemon.type ) {
      let pt = pokemon.type[t]
      for (let i in this.pokemonTypes ) {
        let ptcheck = this.pokemonTypes[i]
        if (pt === ptcheck.cname) {
          result.push(ptcheck.ename);
        }
      }
    }
    pokemon.type = result
    return pokemon
  }

  nameIdFilterEvent(value: string): void {
    this.nameIdFilter = value;
  }
}


