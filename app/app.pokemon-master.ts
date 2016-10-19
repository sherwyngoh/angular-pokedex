import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemon';
import { PokemonService } from './pokemon.service'

@Component({
  selector: 'pokemon-master',
  template: `
    <pokemon-types-master></pokemon-types-master>
    <pokemon-detail *ngIf="selectedPokemon" [pokemon]=selectedPokemon></pokemon-detail>
    <section id="pokemon-list">
      <div *ngFor="let p of pokemon"
      [class.selected]="selectedPokemon === p" class="pokemon"  
      (click)="onSelect(p)">
        <span class="badge">{{p.id}}</span> {{p.name}}
      </div>
    </section>`,
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


