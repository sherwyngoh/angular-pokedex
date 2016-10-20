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
        this.typeFilter = new core_1.EventEmitter();
    }
    PokemonTypesMasterComponent.prototype.getPokemonTypes = function () {
        var _this = this;
        this.PokemonTypesService.getPokemonTypes().then(function (pokemonTypes) { return _this.pokemonTypes = pokemonTypes; });
    };
    ;
    PokemonTypesMasterComponent.prototype.ngOnInit = function () {
        this.getPokemonTypes();
        this.selectedPokemonTypes = [];
    };
    ;
    PokemonTypesMasterComponent.prototype.toggle = function (pokemonType) {
        var index = this.selectedPokemonTypes.indexOf(pokemonType);
        if (index === -1) {
            this.selectedPokemonTypes.push(pokemonType);
            this.typeFilter.emit({
                value: this.selectedPokemonTypes
            });
        }
        else {
            this.selectedPokemonTypes.splice(index, 1);
            this.typeFilter.emit({
                value: this.selectedPokemonTypes
            });
        }
    };
    ;
    PokemonTypesMasterComponent.prototype.getColor = function (type) {
        var colors = {
            Grass: '#7ac74c',
            Normal: '#A8A77A',
            Fighting: '#C22E28',
            Flying: '#A98FF3',
            Poison: '#A33EA1',
            Ground: '#E2BF65',
            Rock: '#B6A136',
            Bug: '#A6B91A',
            Ghost: '#735797',
            Steel: '#B7B7CE',
            Fire: '#EE8130',
            Water: '#6390f0',
            Electric: '#F7d02C',
            Psychic: '#F95587',
            Ice: '#96D9D6',
            Dragon: '#6F35FC',
            Dark: '#705746',
            Fairy: '#D685AD'
        };
        return colors[type];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PokemonTypesMasterComponent.prototype, "selectedPokemonTypes", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PokemonTypesMasterComponent.prototype, "typeFilter", void 0);
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