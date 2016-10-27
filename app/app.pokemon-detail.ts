import { Component, Input } from '@angular/core'
import { Pokemon } from './pokemon'
import { PokemonSkill } from './pokemon-skill'
import { PokemonType } from './pokemon-type'
import { PokemonSkillsService } from './pokemon-skills.service'

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toTitleCase'})
export class ToTitleCase implements PipeTransform {
  transform(value: string): string {
    return value.split('_').map(i => (i[0].toUpperCase() + i.substring(1, i.length))).join(' ');
  }
}

@Component({
  selector: 'pokemon-detail',
  templateUrl: 'templates/pokemon-detail.html'
})

export class PokemonDetailComponent {
  @Input() pokemon: Pokemon
  @Input() selectedPokemonTypes?: string[]
  @Input() pokemonTypes?: PokemonType[]
  faceFront = true
  pokemonSkills: PokemonSkill[]

  constructor(
      private pokemonSkillsService: PokemonSkillsService, 
  ) { }

  ngOnInit(): void {
    this.pokemonSkillsService.getPokemonSkills().then((skills) => {
      this.pokemonSkills = skills
    })
  }
  
  getSkill(skillID: number): PokemonSkill {
    return this.pokemonSkills.filter((skill) => {
      return skill.id === skillID
    })[0]
  }

  getSkillsInSet(pokemon: Pokemon, skillSet: string): PokemonSkill[] {
    let r = []
    if (pokemon.skills[skillSet]) {
      pokemon.skills[skillSet].forEach((s) => {
        if (r.indexOf(this.getSkill(s)) === -1) {
          r.push(this.getSkill(s))
        }
      })
    }
    return r
  }

  getType(skill: PokemonSkill): string {
    for (let i in this.pokemonTypes ) {
      let ptcheck = this.pokemonTypes[i]
      if (skill.type === ptcheck.cname) {
        return ptcheck.ename
      }
    }
  }
}