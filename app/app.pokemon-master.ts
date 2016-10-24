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
  selectedPokemon: Pokemon;
  selectedPokemonTypes: PokemonType[];
  pokemonTypes: PokemonType[];
  pokemon: Pokemon[];
  pokemonByTypes: any;
  
  toggleFilter = false;
  searchQuery = '';
  sortID = 'asc';
  sortName = '';
  sortType = '';

  filteredPokemon: Pokemon[];
  
  constructor(
    private pokemonService: PokemonService,
    private pokemonTypesService: PokemonTypesService, 
    ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.typesFilter = [];
  };

  getPokemon(): void {
    this.pokemonService.getPokemon().then((pokemon) => {
      this.pokemon = pokemon;
      this.filteredPokemon = pokemon;
      this.getPokemonTypes();
    })
  };

  sort(recentToggle: string):void {
    if (this.sortType === '') {
      this.sortForFiltered(recentToggle);
    } else {
      this.sortForFilteredTypes();
    }
  }

  sortForFiltered(recentToggle: string) {
    this.filteredPokemon = this.filteredPokemon.sort( ( a, b ) => {
      return this[`compareBy` + recentToggle]( a, b );
    });
  }

  sortForFilteredTypes() {
    this.pokemonTypes = this.pokemonTypes.sort( ( a, b ) => {
      return this.compareByType( a, b );
    })

    this.pokemonTypes.forEach( (type) => {
      this.pokemonByTypes[type.ename] = this.pokemonByTypes[type.ename].sort( ( a, b ) => {
        return this.compareByName( a, b ) + this.compareByID( a, b )
      })
    })
  }

  compareByName( a, b ): number {
    switch (this.sortName) {
      case 'asc':
        return (a.ename > b.ename) ? 1 : -1 
      case 'dsc':
        return (a.ename > b.ename) ? -1 : 1 
      default:
        return 0
    }    
  }

  compareByID( a, b ): number {
    switch (this.sortID) {
      case 'asc':
        return (a.id > b.id) ? 1 : -1 
      case 'dsc':
        return (a.id > b.id) ? -1 : 1 
      default:
        return 0
    }
  }

  compareByType( a, b): number {
    switch (this.sortType) {
      case 'asc':
        return (a.ename > b.ename) ? 1 : -1 
      case 'dsc':
        return (a.ename > b.ename) ? -1 : 1 
      default:
        return 0
    }
  }
  
  getPokemonTypes(): void {
    let r = {};
    this.pokemonTypesService.getPokemonTypes().then( (pokemonTypes) => {
      this.pokemonTypes = pokemonTypes;
      this.pokemon.forEach( (pokemon) => {
        pokemon.type.forEach( (type) => {
          if (r[type]) {
            r[type].push(pokemon)
          } else {
            r[type] = [pokemon]
          }
        })
      })
    }).then( () => {
      for (let ctype in r) {
        for (let i in this.pokemonTypes) {
          const type = this.pokemonTypes[i];
          if (type.cname == ctype) {
            r[type.ename] = r[type.cname]
            r[type.ename].forEach( (pokemon) => {
                pokemon.typesInEnglish ? pokemon.typesInEnglish.push(type.ename) : pokemon.typesInEnglish = [type.ename]
            })
            delete r[type.cname]
          }
        }
      }
      this.pokemonByTypes = r
    })
  }

  
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  };
  
  typeFilterEvent(value): void {
    this.typesFilter = value.value.map((type) => {
      return type.ename;
    });


    if ( this.sortType === '' ) {
      this.filteredPokemon = this.pokemon.filter( (pokemon) => {
        let remains = true;
        for (let i in pokemon.typesInEnglish) {
          if ( this.typesFilter.indexOf(pokemon.typesInEnglish[i]) != -1 ) {
            remains = false
          }
        }
        return remains
      })
    }
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
    if ( this.searchQuery != undefined ) {
      this.filteredPokemon = this.pokemon.filter((pokemon) => {
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
        this.toggleSortField('sortID');
        this.sort('ID');
        break
      case 'name':
        this.toggleSortField('sortName');
        this.sort('Name');
        break
      case 'type':
        this.toggleSortField('sortType');
        this.sort('Type')
        break
      default:
        break
    }
  }

  toggleSortField(field: string): void {
    switch ( this[field] ) {
      case 'asc':
        this[field] = 'dsc'; 
        break
      case 'dsc':
        this[field] = ''; 
        break
      case '':
        this[field] = 'asc'; 
        break
      default:
        break
    }
  }
}