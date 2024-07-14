import React from 'react';

const Pokemones = (props) => {
  return (
    <div>
      <h2> Nombre: {props.infoPokemon.name} </h2>
      <p> Altura: {props.infoPokemon.height} </p>
      <p> Peso: {props.infoPokemon.weight} </p>
      <img src={props.infoPokemon.sprites.other.dream_world.front_default} alt={props.infoPokemon.name} />
    </div>
  );
};

export default Pokemones;
