import { Injectable } from '@angular/core';
import { PokemonSkill } from './pokemon-skill';
import { POKEMONSKILLS } from './mock-pokemon-skills';

@Injectable()
export class PokemonSkillsService {
  getPokemonSkills(): Promise<PokemonSkill[]> {
    return Promise.resolve(POKEMONSKILLS);
  }
}
