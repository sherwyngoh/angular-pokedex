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
  sortID: string;
  sortName: string;
  sortType: string;

  filteredPokemon: Pokemon[];
  
  constructor(
    private pokemonService: PokemonService,
    private pokemonTypesService: PokemonTypesService, 
    ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.toggleFilter = false;
    this.searchQuery = '';
    this.sortID = 'asc';
    this.sortName = 'none';
    this.sortType = 'none';
  };

  getPokemon(): void {
    this.pokemonService.getPokemon().then((pokemon) => {
      this.pokemon = pokemon;
      this.filteredPokemon = pokemon;
      this.getPokemonTypes();
    })
  };

  sort(sortby: string, direction: string):void {
    this.filteredPokemon = this.pokemon.sort( ( a, b ) => {
      return this.sortByID(a, b, direction);
    });
  }

  sortByName( a, b , direction: string): number {
      switch (direction) {
        case 'asc':
          return (a.ename > b.ename) ? 1 : -1 
        case 'dsc':
          return (a.ename > b.ename) ? -1 : 1 
        default:
          return 0
      }    
  }

  sortByType( a, b , direction: string): number {
      switch (direction) {
        case 'asc':
          return (this.getTypes(a)[0] > this.getTypes(a)[0]) ? 1 : -1 
        case 'dsc':
          return (this.getTypes(a)[0] > this.getTypes(a)[0]) ? -1 : 1 
        default:
          return 0
      }    
  }

  sortByID( a, b , direction: string): number {
      switch (direction) {
        case 'asc':
          return (a.id > b.id) ? 1 : -1 
        case 'dsc':
          return (a.id > b.id) ? -1 : 1 
        default:
          return 0
      }
  }
  
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
        this.toggleSortField('sortID');
        this.sort('id', this.sortID);
        break
      case 'name':
        this.toggleSortField('sortName');
        console.log('name');
        break
      case 'type':
        this.toggleSortField('sortType');
        console.log('type');
        break
      default:
        console.log('????');
        break
    }
  }

  toggleSortField(field: string): void {
    console.log(this[field]);
    switch ( this[field] ) {
      case 'asc':
        this[field] = 'dsc'; 
        break
      case 'dsc':
        this[field] = field === 'sortID' ? 'asc' : 'none'; 
        break
      case 'none':
        this[field] = 'asc'; 
        break
      default:
        console.log('????');
        break
    }
  }
}