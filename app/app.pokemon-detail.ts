import { Component, Input } from '@angular/core'
import { Pokemon } from './pokemon'

@Component({
  selector: 'pokemon-detail',
  templateUrl: 'templates/pokemon-detail.html'
})

export class PokemonDetailComponent {
  @Input() pokemon: Pokemon
  @Input() pokemonTypes?: string[]

}