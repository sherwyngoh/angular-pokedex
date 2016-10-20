import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemon';

@Injectable()
export class PokemonService {
  getPokemon(): Promise<Pokemon[]> {
    return Promise.resolve(POKEMON);
  }
}
