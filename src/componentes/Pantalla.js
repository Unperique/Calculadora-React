/**
 * Componente de pantalla para mostrar la entrada del usuario.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.input - La entrada del usuario.
 * @returns {JSX.Element} - El elemento de React que representa la pantalla.
 */
import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = ({ input }) => (
  /**
   * Dibuja el componente de pantalla.
   * @returns {JSX.Element} - El elemento de React que representa la pantalla.
   */
  <div className='input'>
    {/** Muestra la entrada del usuario */}
    {input}     
  </div>
); 

export default Pantalla;
