import { Injectable } from '@angular/core';
import { PokemonType } from './pokemon-type';
import { POKEMONTYPES } from './mock-pokemon-type';

@Injectable()
export class PokemonTypesService {
  getPokemonTypes(): Promise<PokemonType[]> {
    return Promise.resolve(POKEMONTYPES);
  }
}
