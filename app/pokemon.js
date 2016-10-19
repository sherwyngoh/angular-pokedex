"use strict";
var Pokemon = (function () {
    function Pokemon() {
    }
    Pokemon.prototype.getImage = function () {
        return this.ename;
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