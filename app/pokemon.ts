import { PokemonType } from './pokemon-type';
import { POKEMONTYPES } from './mock-pokemon-type';

export class Pokemon {
  base: {
    Attack: number;
    Defense: number;
    HP: number;
    SpAtk: number;
    SpDef: number;
    Speed: number;
  };
  cname?: string;
  ename: string;
  id?: string;
  jname?: string;
  flatName?: string;
  model?: PokemonModel[];
  skills: {
    egg?: number[];
    level_up?: number[];
    tm?: number[];
    tutor?: number[];
    transfer?: number[];
    pre_evolution?: number[];
  };
  type: string[];
  typesInEnglish?: string[];

  getTypes?(pokemon: Pokemon) {
    const cname = this.type
    let result = []
    for(let type of cname) {
      for (let pokemonType of POKEMONTYPES) {
        if(type === pokemonType.cname) {
          result.push(type)
        }
      }
    }
    return result
  }

  getTypeScore?(pokemon: Pokemon) {
    const types = this.getTypes(pokemon);

  }
}

class PokemonModel {
    id?: string;
    type?: string[];
}