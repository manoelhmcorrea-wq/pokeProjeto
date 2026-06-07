import { PokemonResumo } from '../models/pokemon';
export declare class PokeApiService {
    private readonly baseUrl;
    constructor(baseUrl?: string);
    buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null>;
}
//# sourceMappingURL=PokeApiService.d.ts.map