import { Component, Input } from '@angular/core'
import { Pokemon } from './pokemon'

@Component({
  selector: 'pokemon-detail',
  template: `
    <div *ngIf="pokemon">
      <h2>{{pokemon.jname}} details!</h2>
      <div><label>id: </label>{{pokemon.id}}</div>
    </div>
  `
})

export class PokemonDetailComponent {
  @Input() pokemon: Pokemon
}