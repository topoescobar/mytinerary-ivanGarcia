import React from 'react'

const Prueba = () => {
  const arrayOriginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const maxSize = 4;

  const [arrayModificado, setArrayModificado] = useState([]);

  // Función para dividir el array original en subarrays
  const divideArray = () => {
    const newArray = [];
    for (let i = 0; i < arrayOriginal.length; i += maxSize) {
      newArray.push(arrayOriginal.slice(i, i + maxSize));
    }
    setArrayModificado(newArray);
  }

  const show = () => {
    console.log(arrayModificado)
  }

  return (
    <div>
      <button onClick={divideArray}>Dividir Array</button>
      <button onClick={show} >Mostrar en consola</button>
    </div>
  )
}

export default Prueba