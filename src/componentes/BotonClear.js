/**
 * Componente del botón de borrar.
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.manejarClear - Función para manejar el evento de borrar.
 * @param {string} props.children - Contenido del botón.
 * @returns {JSX.Element} - El elemento de React que representa el botón de borrar.
 */
import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
  // Div del contenedor del botón de borrar
  <div className='boton-clear' onClick={props.manejarClear}>
    // Contenido del botón de borrar
    {props.children}
  </div>
);

// Exporta el componente BotonClear
export default BotonClear;

