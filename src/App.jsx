import { useEffect, useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetchApi";

function App() {
  const [pokemonsState, setPokemonnsState] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const { data, isLoading, hasError, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  useEffect(() => {
    if (data) {
      setPokemonnsState(data.results);
      setFilteredPokemons(data.results);
    }
  }, [data]);

  const onSearch = (search) => {
    if (search === "") {
      setFilteredPokemons(pokemonsState);
      return;
    }
    if (search) {
      const filteredPokemons = pokemonsState.filter((pokemon) =>
        pokemon.name.includes(search)
      );
      setFilteredPokemons(filteredPokemons);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon Web</h1>
      <SearchBar onSearch={(search) => onSearch(search)} />
      {isLoading && <p>Loading...</p>}
      {hasError && (
        <p>
          Error: {error.code} {error.message}{" "}
        </p>
      )}
      {data && <PokemonList pokemons={filteredPokemons} />}
    </div>
  );
}

export default App;
