// Importa el módulo React desde el paquete react
import React from 'react';

// Importa el módulo ReactDOM desde el paquete react-dom
import ReactDOM from 'react-dom';

// Importa el archivo de hojas de estilos index.css
import './index.css';

// Importa el componente App desde el archivo App.js
import App from './App';

// Renderiza el componente App en el elemento HTML con el id 'root' usando ReactDOM.render.
// El componente App se encuentra envuelto en React.StrictMode para habilitar el modo estricto.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Obtiene el elemento HTML con el id 'root' y lo utiliza como contenedor para el componente renderizado.
  document.getElementById('root')
);

