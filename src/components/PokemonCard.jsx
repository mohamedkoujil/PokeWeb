import React, { useEffect } from "react";
import { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const id = pokemon.url.split("/")[6];
  const imgLink =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png";
  return (
    <div
      className="card m-2 background-light pokemon-card bg-light"
      style={{ width: "12rem" }}
    >
      <img src={imgLink} alt={pokemon.name} className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title">{pokemon.name}</h5>
      </div>
    </div>
  );
};

export default PokemonCard;
