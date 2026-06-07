
import {APIError} from '../models/customError';
import {PokemonApiResponse, PokemonIdentifier,PokemonResumo} from '../models/pokemon';
export class PokeApiService {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "https://pokeapi.co/api/v2") {
    this.baseUrl = baseUrl;
  }

  public async buscarPokemon(nomeOuId:string): Promise<PokemonResumo | null>{
    try {
      const response = await fetch(
        `${this.baseUrl}/pokemon/${nomeOuId}`
      );

      if (!response.ok) {
        return null;
      }

      const pokemon: PokemonApiResponse =
        await response.json();

      return {
        id: pokemon.id,
        nome: pokemon.name,
        altura: pokemon.height,
        peso: pokemon.weight,
        tipos: pokemon.types.map(
          item => item.type.name
        )
      };
    } catch {
      return null;
    }
  }

/*
  public async getAllPokemons(): Promise<PokemonApiResponse> {
    try {
      const response: Response = await fetch(
        `${this.baseUrl}/pokemon`
      );

      if (!response.ok) {
        throw new APIError("Erro ao buscar pokémons");
      }

      const pokemons: PokemonApiResponse = await response.json();

      return pokemons;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new APIError("Falha de comunicação com API");
    }
  } */

 /* public async getPokemonByIdOrName(idOrName: PokemonIdentifier): Promise<PokemonApiResponse> {
    try {
      const response: Response = await fetch(
        `${this.baseUrl}/pokemon/${idOrName}`
      );

      if (!response.ok) {
        throw new APIError("Erro ao buscar pokémon");
      }

      const pokemon: PokemonApiResponse = await response.json();

      return pokemon;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new APIError("Falha de comunicação com API");
    }
  } */
}