"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_1 = require('./pokemon');
var pokemon_skills_service_1 = require('./pokemon-skills.service');
var core_2 = require('@angular/core');
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
var ToTitleCase = (function () {
    function ToTitleCase() {
    }
    ToTitleCase.prototype.transform = function (value) {
        return value.split('_').map(function (i) { return (i[0].toUpperCase() + i.substring(1, i.length)); }).join(' ');
    };
    ToTitleCase = __decorate([
        core_2.Pipe({ name: 'toTitleCase' }), 
        __metadata('design:paramtypes', [])
    ], ToTitleCase);
    return ToTitleCase;
}());
exports.ToTitleCase = ToTitleCase;
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent(pokemonSkillsService) {
        this.pokemonSkillsService = pokemonSkillsService;
        this.faceFront = false;
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonSkillsService.getPokemonSkills().then(function (skills) {
            _this.pokemonSkills = skills;
        });
    };
    PokemonDetailComponent.prototype.getSkill = function (skillID) {
        return this.pokemonSkills.filter(function (skill) {
            return skill.id === skillID;
        })[0];
    };
    PokemonDetailComponent.prototype.getSkillsInSet = function (pokemon, skillSet) {
        var _this = this;
        var r = [];
        if (pokemon.skills[skillSet]) {
            pokemon.skills[skillSet].forEach(function (s) {
                if (r.indexOf(_this.getSkill(s)) === -1) {
                    r.push(_this.getSkill(s));
                }
            });
        }
        return r;
    };
    PokemonDetailComponent.prototype.getType = function (skill) {
        for (var i in this.pokemonTypes) {
            var ptcheck = this.pokemonTypes[i];
            if (skill.type === ptcheck.cname) {
                return ptcheck.ename;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pokemon_1.Pokemon)
    ], PokemonDetailComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PokemonDetailComponent.prototype, "selectedPokemonTypes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PokemonDetailComponent.prototype, "pokemonTypes", void 0);
    PokemonDetailComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-detail',
            templateUrl: 'templates/pokemon-detail.html'
        }), 
        __metadata('design:paramtypes', [pokemon_skills_service_1.PokemonSkillsService])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
exports.PokemonDetailComponent = PokemonDetailComponent;
//# sourceMappingURL=app.pokemon-detail.js.map