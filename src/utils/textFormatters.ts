import { PokemonResumo } from "../models/pokemon";

export function createSeparator(size: number = 40):string{
    return '-'.repeat(size)
}
export function formatPokemon(pokemon:PokemonResumo): string{
    return `
    ${createSeparator()}
    ID: ${pokemon.id}
    Nome: ${pokemon.nome}
    Tipo(s): ${pokemon.tipos}
    Altura: ${pokemon.altura}
    Peso: ${pokemon.peso}
    ${createSeparator}
    `
}