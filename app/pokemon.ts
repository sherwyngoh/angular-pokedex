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

  getImage(): string {
    return this.ename
  }
}

class PokemonModel {
    id?: string;
    type?: string[];
}