import axios from "axios";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";

export class PokemonService {
  getPokemons() {
    return axios.get(POKEMON_API_URL + "?limit=640");
  }

  getPokemon(id) {
    return axios.get(`${POKEMON_API_URL}/${id}`);
  }

  getPokemonName(name) {
    return axios.get(`${POKEMON_API_URL}/${name}`);
  }
}
