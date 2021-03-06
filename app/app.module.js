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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_pokemon_master_1 = require('./app.pokemon-master');
var app_pokemon_types_master_1 = require('./app.pokemon-types-master');
var app_pokemon_detail_1 = require('./app.pokemon-detail');
var app_pokemon_detail_2 = require('./app.pokemon-detail');
var app_component_1 = require('./app.component');
var pokemon_types_service_1 = require('./pokemon-types.service');
var pokemon_service_1 = require('./pokemon.service');
var pokemon_skills_service_1 = require('./pokemon-skills.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_pokemon_master_1.PokemonMasterComponent,
                app_pokemon_detail_1.PokemonDetailComponent,
                app_pokemon_types_master_1.PokemonTypesMasterComponent,
                app_pokemon_detail_2.ToTitleCase,
            ],
            providers: [pokemon_service_1.PokemonService, pokemon_types_service_1.PokemonTypesService, pokemon_skills_service_1.PokemonSkillsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map