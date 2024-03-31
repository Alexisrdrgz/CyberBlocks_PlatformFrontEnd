import React, { useState } from 'react';
import './App.css';

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true); // Comenzamos mostrando la imagen del menú
  const [homeVisible, setHomeVisible] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 

  const showHome = () => {
    setHomeVisible(true);
    setMenuVisible(false); // Oculta la imagen del menú al mostrar las imágenes de inicio
  };

  const hideHome = () => {
    setHomeVisible(false);
    setMenuVisible(true); // Mostrar la imagen del menú cuando se ocultan las imágenes de inicio
  };

  return (
    <div className="navbar">
      <div className="seccion">
        <img src='img\iconos\atras.png' alt='regresar' id='atras'></img>
      </div>
      <div className={`secciondos ${expanded ? 'expanded' : ''}`}>
        {/* Icono de flecha hacia abajo */}
        <img src='img\iconos\abajo.png' alt='expandir' id='expandir' onClick={handleExpandClick}></img>
        <div>
          {expanded && (
            <>
              <img src='img\iconos\pincel.png' alt='1'></img>
              <img src='img\iconos\pincel.png' alt='2'></img>
              <img src='img\iconos\pincel.png' alt='3'></img>
            </>
          )}
        </div>
      </div>
      <div className="seccion 3">
        {menuVisible && (
          <img src='img\iconos\menu2.png' alt='menu' id='menu' onClick={showHome}></img>
        )}
        <div>
          {homeVisible && (
            <>
              <img src='img\iconos\home.png' alt='1' onClick={hideHome}></img>
              <img src='img\iconos\mundo.png' alt='2'></img>
              <img src='img\iconos\usuario.png' alt='3'></img>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
