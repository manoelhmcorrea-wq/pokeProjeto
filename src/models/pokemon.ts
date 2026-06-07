
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

export interface PokemonResumo{
    id:number;
    nome:string;
    tipos:string[];
    altura:number;
    peso:number;
}