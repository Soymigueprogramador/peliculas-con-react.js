import { useState, useEffect } from 'react';
import axion from 'axion';
import YouTube from 'react-youtube';

const App = () => {
  //Conecciones a las apis.
  const apiURL = ''; //Desde aca voy a conectarme con la url de la api.
  const apiKey = ''; //Desde aca me voy a conectar con la clave de la api. 
  const imagePath = ''; //Desde aca voy a configurar las imagenes que va a mostrar. 
  const imageYRL = ''; //Desde aca voy a conectarme con la url de las imagenes.

  //Variables de estado.
  const { movie, getMovie } = useState([]); 

  return (
    <div>
      <h1> Peliculas con React </h1>
      <p> En este sitio vas a poder buscar cualquier Peliculas </p>
    </div>
  )
}

export default App