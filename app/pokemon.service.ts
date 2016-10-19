import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemon';

@Injectable()
export class PokemonService {
  getPokemon(): Promise<Pokemon[]> {
    return Promise.resolve(POKEMON);
  }
  
  // getPokemonSlowly(): Promise<Pokemon[]> {
  //   return new Promise<Pokemon[]>(resolve =>
  //     setTimeout(resolve, 2000)) // delay 2 seconds
  //     .then(() => this.getPokemon());
  // }
}
