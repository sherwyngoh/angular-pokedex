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
  searchQuery: string;
  nameIdFilter: string;
  toggleFilter: boolean;
  selectedPokemon: Pokemon;
  selectedPokemonTypes: PokemonType[];
  pokemonTypes: PokemonType[];
  pokemon: Pokemon[];
  sortID: number;
  sortName: number;
  sortType: number;

  filteredPokemon: Pokemon[];
  
  constructor(
    private pokemonService: PokemonService,
    private pokemonTypesService: PokemonTypesService, 
    ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.toggleFilter = false;
    this.searchQuery = '';
    this.sortID = 1;
    this.sortName = 0;
    this.sortType = 0;
  };

  getPokemon(): void {
    this.pokemonService.getPokemon().then((pokemon) => {
      this.pokemon = pokemon;
      this.filteredPokemon = pokemon;
      this.getPokemonTypes();
    });
  };
  
  getPokemonTypes(): void {
    this.pokemonTypesService.getPokemonTypes().then((pokemonTypes)=> {
      this.pokemonTypes = pokemonTypes;
    })
  }

  
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

  getTypes(pokemon: Pokemon): string[] {
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
    return result;
  }

  updateSearchQuery(): void {
    console.log(this.searchQuery);
    if ( this.searchQuery != undefined ) {
      this.filteredPokemon = this.pokemon.filter((pokemon) => {
        console.log(pokemon.ename.toLowerCase().indexOf(this.searchQuery.toLowerCase()))
        if (pokemon.ename.indexOf(this.searchQuery) != -1) {
          return true;
        } 
        return false;
      });
    }
    this.typeFilterEvent(this.typesFilter);
  }

  performSortToggle(field: string): void {
    switch ( field ) {
      case 'id':
        console.log('id');
        break
      case 'name':
        console.log('name');
        break
      case 'type':
        console.log('type');
        break
      default:
        console.log('????');
        break
    }
  }
}