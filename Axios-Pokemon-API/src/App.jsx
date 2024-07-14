import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Pokemones from './Components/Pokemones';

const App = () => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [detallePokemon, setDetallePokemon] = useState({});
  const [fetching, setFetching] = useState(false);

  const cargarPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=807";

    try {
      const respuesta = await axios.get(URL);
      setListaPokemon(respuesta.data.results);
      setFetching(true);
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  };

  const cargarDetallePokemon = async (urlPoke) => {
    try {
      const respuesta = await axios.get(urlPoke);
      setDetallePokemon(respuesta.data);
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  };

  return (
    <>
      <h1> API de Pokemon con Axios </h1>
      <div className='contenedor-pokemon'>
        <button onClick={cargarPokemon} className="fetch-pokemon-button">Fetch Pokemon</button>
        {fetching && (
          <div>
            <div>
              {detallePokemon.name ? (
                <Pokemones infoPokemon={detallePokemon} />
              ) : (
                "Haz click en un Pokémon"
              )}
            </div>
            <ul>
              {listaPokemon.map((pokemon, index) => (
                <li key={index}>
                  <button onClick={() => cargarDetallePokemon(pokemon.url)}>
                    {pokemon.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
