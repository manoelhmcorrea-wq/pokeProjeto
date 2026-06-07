"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeApiService = void 0;
class PokeApiService {
    baseUrl;
    constructor(baseUrl = "https://pokeapi.co/api/v2") {
        this.baseUrl = baseUrl;
    }
    async buscarPokemon(nomeOuId) {
        try {
            const response = await fetch(`${this.baseUrl}/pokemon/${nomeOuId}`);
            if (!response.ok) {
                return null;
            }
            const pokemon = await response.json();
            return {
                id: pokemon.id,
                nome: pokemon.name,
                altura: pokemon.height,
                peso: pokemon.weight,
                tipos: pokemon.types.map(item => item.type.name)
            };
        }
        catch {
            return null;
        }
    }
}
exports.PokeApiService = PokeApiService;
//# sourceMappingURL=PokeApiService.js.map