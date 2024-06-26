import React from 'react';
import '../hojas-de-estilo/Boton.css';

/**
 * Componente de botón para la calculadora.
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.manejarClic - Función para manejar clics.
 * @param {string} props.children - Contenido del botón.
 * @returns {JSX.Element} - El elemento de React que representa el botón.
 */
function Boton(props) {

  /**
   * Determina si el valor es un operador.
   * @param {string} valor - Valor a evaluar.
   * @returns {boolean} - Verdadero si el valor es un operador, falso en caso contrario.
   */
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
