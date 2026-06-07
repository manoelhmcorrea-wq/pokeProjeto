import { CatalogoPokemon } from "./classes/CatalogoPokemon";
import { PokeApiService } from "./services/PokeApiService";

const service = new PokeApiService();



async function main() {

  const catalogo = new CatalogoPokemon();

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
