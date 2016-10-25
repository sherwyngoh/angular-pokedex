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
var pokemon_service_1 = require('./pokemon.service');
var pokemon_types_service_1 = require('./pokemon-types.service');
var PokemonMasterComponent = (function () {
    function PokemonMasterComponent(pokemonService, pokemonTypesService) {
        this.pokemonService = pokemonService;
        this.pokemonTypesService = pokemonTypesService;
        this.toggleFilter = false;
        this.searchQuery = '';
        this.sortID = 'asc';
        this.sortName = '';
        this.sortType = '';
    }
    PokemonMasterComponent.prototype.ngOnInit = function () {
        this.typesFilter = [];
        this.getPokemon();
    };
    PokemonMasterComponent.prototype.getPokemon = function () {
        var _this = this;
        this.pokemonService.getPokemon().then(function (pokemon) {
            _this.pokemon = pokemon;
            _this.filteredPokemon = pokemon;
            _this.getPokemonTypes();
        });
    };
    PokemonMasterComponent.prototype.sort = function (recentToggle) {
        var _this = this;
        if (this[("sort" + recentToggle)] === '') {
            return;
        }
        this.filteredPokemon = this.filteredPokemon.sort(function (a, b) {
            return _this[("compareBy" + recentToggle)](a, b);
        });
    };
    PokemonMasterComponent.prototype.compareByName = function (a, b) {
        switch (this.sortName) {
            case 'asc':
                return (a.ename > b.ename) ? 1 : -1;
            case 'dsc':
                return (a.ename > b.ename) ? -1 : 1;
        }
    };
    PokemonMasterComponent.prototype.compareByID = function (a, b) {
        switch (this.sortID) {
            case 'asc':
                return (a.id > b.id) ? 1 : -1;
            case 'dsc':
                return (a.id > b.id) ? -1 : 1;
        }
    };
    PokemonMasterComponent.prototype.compareByType = function (a, b) {
        var aBaseType = a.typesInEnglish[0];
        var bBaseType = b.typesInEnglish[0];
        var aLength = a.typesInEnglish.length;
        var bLength = b.typesInEnglish.length;
        var aHas2Types = aLength === 2;
        switch (this.sortType) {
            case 'asc':
                if (aBaseType === bBaseType) {
                    if (aLength != bLength) {
                        return (aLength > bLength) ? 1 : -1;
                    }
                    if (aHas2Types) {
                        return (a.typesInEnglish[1] > b.typesInEnglish[1]) ? 1 : -1;
                    }
                }
                return (a.typesInEnglish[0] > b.typesInEnglish[0]) ? 1 : -1;
            case 'dsc':
                if (aBaseType === bBaseType) {
                    if (aLength != bLength) {
                        return (aLength > bLength) ? -1 : 1;
                    }
                    if (aHas2Types) {
                        return (a.typesInEnglish[1] > b.typesInEnglish[1]) ? -1 : 1;
                    }
                }
                return (a.typesInEnglish[0] > b.typesInEnglish[0]) ? -1 : 1;
        }
    };
    PokemonMasterComponent.prototype.getPokemonTypes = function () {
        var _this = this;
        var r = {};
        this.pokemonTypesService.getPokemonTypes().then(function (pokemonTypes) {
            _this.pokemonTypes = pokemonTypes;
            _this.pokemon.forEach(function (pokemon) {
                pokemon.type.forEach(function (type) {
                    if (r[type]) {
                        r[type].push(pokemon);
                    }
                    else {
                        r[type] = [pokemon];
                    }
                });
            });
        }).then(function () {
            for (var ctype in r) {
                var _loop_1 = function(i) {
                    var type = _this.pokemonTypes[i];
                    if (type.cname == ctype) {
                        r[type.ename] = r[type.cname];
                        r[type.ename].forEach(function (pokemon) {
                            pokemon.typesInEnglish ? pokemon.typesInEnglish.push(type.ename) : pokemon.typesInEnglish = [type.ename];
                        });
                        delete r[type.cname];
                    }
                };
                for (var i in _this.pokemonTypes) {
                    _loop_1(i);
                }
            }
        });
    };
    PokemonMasterComponent.prototype.onSelect = function (pokemon) {
        this.selectedPokemon = pokemon;
    };
    PokemonMasterComponent.prototype.typeFilterEvent = function (value) {
        var _this = this;
        this.typesFilter = value.value.map(function (type) {
            return type.ename;
        });
        this.filteredPokemon = this.pokemon.filter(function (pokemon) {
            var remains = true;
            for (var i in pokemon.typesInEnglish) {
                if (_this.typesFilter.indexOf(pokemon.typesInEnglish[i]) != -1) {
                    remains = false;
                }
            }
            return remains;
        });
    };
    PokemonMasterComponent.prototype.getTypes = function (pokemon) {
        var result = [];
        for (var t in pokemon.type) {
            var pt = pokemon.type[t];
            for (var i in this.pokemonTypes) {
                var ptcheck = this.pokemonTypes[i];
                if (pt === ptcheck.cname) {
                    result.push(ptcheck.ename);
                }
            }
        }
        return result;
    };
    PokemonMasterComponent.prototype.updateSearchQuery = function () {
        var _this = this;
        if (this.searchQuery != undefined) {
            this.filteredPokemon = this.pokemon.filter(function (pokemon) {
                if (pokemon.ename.indexOf(_this.searchQuery) != -1) {
                    return true;
                }
                return false;
            });
        }
        this.typeFilterEvent(this.typesFilter);
    };
    PokemonMasterComponent.prototype.performSortToggle = function (field) {
        switch (field) {
            case 'id':
                this.toggleSortField('sortID');
                this.sort('ID');
                break;
            case 'name':
                this.toggleSortField('sortName');
                this.sort('Name');
                break;
            case 'type':
                this.toggleSortField('sortType');
                this.sort('Type');
                break;
            default:
                break;
        }
    };
    PokemonMasterComponent.prototype.toggleSortField = function (field) {
        switch (this[field]) {
            case 'asc':
                this[field] = 'dsc';
                break;
            case 'dsc':
                this[field] = '';
                break;
            case '':
                this[field] = 'asc';
                break;
            default:
                break;
        }
    };
    PokemonMasterComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-master',
            templateUrl: 'templates/pokemon-master.html'
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, pokemon_types_service_1.PokemonTypesService])
    ], PokemonMasterComponent);
    return PokemonMasterComponent;
}());
exports.PokemonMasterComponent = PokemonMasterComponent;
//# sourceMappingURL=app.pokemon-master.js.map