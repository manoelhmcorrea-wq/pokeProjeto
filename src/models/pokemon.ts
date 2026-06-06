//professor usa readonly no id de exemplo, devo usar se eu não quiser que seja modificado o id ou o nome 
export interface PokemonType{
    type: {
    name: string;
  };
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}
// representaçã odo produto dentro do pcbox
export interface LocalPokemon extends PokemonApiResponse{
    addedAt : string
}

export type PokemonIdentifier = number | string

//representa visualização resumida só para o que é pontual => type exemplo = Pick<Pokemon, 'id' | ' name' | etc>
