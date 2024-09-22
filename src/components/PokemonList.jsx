import React from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <h2>Pokemon List</h2>
      <div className="container">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
