"use strict";
var mock_pokemon_type_1 = require('./mock-pokemon-type');
var Pokemon = (function () {
    function Pokemon() {
    }
    Pokemon.prototype.getTypes = function () {
        var cname = this.type;
        var result = [];
        for (var _i = 0, cname_1 = cname; _i < cname_1.length; _i++) {
            var type = cname_1[_i];
            console.log(type);
            for (var _a = 0, POKEMONTYPES_1 = mock_pokemon_type_1.POKEMONTYPES; _a < POKEMONTYPES_1.length; _a++) {
                var pokemonType = POKEMONTYPES_1[_a];
                if (type === pokemonType.cname) {
                    result.push(type);
                }
            }
        }
        return result;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var PokemonModel = (function () {
    function PokemonModel() {
    }
    return PokemonModel;
}());
//# sourceMappingURL=pokemon.js.map