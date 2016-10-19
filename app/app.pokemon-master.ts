import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemon';
import { PokemonService } from './pokemon.service'

@Component({
  selector: 'pokemon-master',
  template: `
    <ul class="pokemon">
      <li *ngFor="let p of pokemon"
      [class.selected]="selectedPokemon === p"  
      (click)="onSelect(p)">
        <span class="badge">{{p.id}}</span> {{p.name}}
      </li>
    </ul>
    <pokemon-detail [pokemon]=p> </pokemon-detail>`,
  styles: [`
    `]

})


export class PokemonMasterComponent { 
  selectedPokemon: Pokemon;
  pokemon: Pokemon[];
  
  constructor(private pokemonService: PokemonService) { }

  getPokemon(): void {
    this.pokemonService.getPokemonSlowly().then(pokemon => this.pokemon = pokemon);
  }
  
  ngOnInit(): void {
    this.getPokemon();
  }
  
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  };
  

}


