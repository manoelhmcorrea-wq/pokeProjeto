"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CatalogoPokemon_1 = require("./classes/CatalogoPokemon");
const PokeApiService_1 = require("./services/PokeApiService");
const service = new PokeApiService_1.PokeApiService();
async function main() {
    const catalogo = new CatalogoPokemon_1.CatalogoPokemon();
    const pikachu = await service.buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }
    const charmander = await service.buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }
    const pikachuDuplicado = await service.buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }
    await service.buscarPokemon("pokemon-inexistente");
    catalogo.listar();
    catalogo.remover(25);
    catalogo.listar();
}
main();
//# sourceMappingURL=main.js.map