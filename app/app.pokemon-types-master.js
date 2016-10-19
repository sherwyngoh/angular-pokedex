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
var pokemon_types_service_1 = require('./pokemon-types.service');
var PokemonTypesMasterComponent = (function () {
    function PokemonTypesMasterComponent(PokemonTypesService) {
        this.PokemonTypesService = PokemonTypesService;
    }
    PokemonTypesMasterComponent.prototype.getPokemonTypes = function () {
        var _this = this;
        this.PokemonTypesService.getPokemonTypes().then(function (pokemonTypes) { return _this.pokemonTypes = pokemonTypes; });
    };
    ;
    PokemonTypesMasterComponent.prototype.ngOnInit = function () {
        this.getPokemonTypes();
    };
    ;
    PokemonTypesMasterComponent.prototype.onSelect = function (pokemonType) {
        this.selectedPokemonType = pokemonType;
    };
    ;
    PokemonTypesMasterComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-types-master',
            templateUrl: 'templates/pokemon-types-master.html',
        }), 
        __metadata('design:paramtypes', [pokemon_types_service_1.PokemonTypesService])
    ], PokemonTypesMasterComponent);
    return PokemonTypesMasterComponent;
}());
exports.PokemonTypesMasterComponent = PokemonTypesMasterComponent;
//# sourceMappingURL=app.pokemon-types-master.js.map