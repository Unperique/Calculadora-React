import './App.css'; // Importa el archivo de hojas de estilos para el componente App
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; // Importa la imagen del logo de freeCodeCamp
import Boton from './componentes/Boton'; // Importa el componente Botón
import Pantalla from './componentes/Pantalla'; // Importa el componente Pantalla
import BotonClear from './componentes/BotonClear'; // Importa el componente Botón de Borrar
import { useState } from 'react'; // Importa el hook useState de React
import { evaluate } from 'mathjs'; // Importa la función evaluate de mathjs

/**
 * Componente principal de la aplicación.
 * Este componente renderiza la interfaz de la calculadora.
 */
function App() {

  /**
   * Estado para almacenar la entrada del usuario.
   * useState es un hook de React que permite mantener el estado en un componente funcional.
   * La variable input almacena la entrada del usuario y setInput es una función para actualizar su valor.
   */
  const [input, setInput] = useState('');

  /**
   * Función para agregar la entrada del usuario.
   * Esta función recibe un valor y concatena ese valor con el valor actual de input.
   * @param {string} val - El valor a agregar a input.
   */
  const agregarInput = val => {
    setInput(input + val);
  };

  /**
   * Función para calcular el resultado de la entrada del usuario.
   * Esta función utiliza la función evaluate de mathjs para evaluar la expresión matemática almacenada en input.
   * Si input no está vacío, se actualiza el valor de input con el resultado de la evaluación.
   * Si input está vacío, se muestra un mensaje de alerta al usuario para ingresar valores.
   */
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  /**
   * Renderiza el componente principal de la aplicación.
   * @return {JSX.Element} El componente principal de la aplicación.
   */
  return (
    // Comienza el componente principal de la aplicación
    <div className='App'>
      {/* Renderiza el logo de freeCodeCamp */}
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      {/* Renderiza el contenedor de la calculadora */}
      <div className='contenedor-calculadora'>
        {/* Renderiza la pantalla de la calculadora */}
        <Pantalla input={input}/>
        {/* Renderiza cada fila de botones */}
        <div className='fila'>
          {/* Renderiza los botones de la primera fila */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          {/* Renderiza los botones de la segunda fila */}
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          {/* Renderiza los botones de la tercera fila */}
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          {/* Renderiza los botones de la cuarta fila */}
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          {/* Renderiza el botón de borrar */}
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
