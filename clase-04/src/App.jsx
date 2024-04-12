
import { useState } from 'react'
import './App.css'
// import ComponentePadre from './components/ComponentePadre'
// import Title from './components/Title'

function App() {
  // const [buttonText, setButtonText] = useState('Haz clic aqui')
  // const [counter, setCounter] = useState(0)
  let counter = 0;

  const decrementar = () => {
    counter--;
    // if(counter === 0){
    //   return;
    // }

    // setCounter(counter - 1)
  }

  const incrementar = () => {
    counter++;
    // setCounter(counter + 1)
  }
  
  return (
    <>
      {/* <Title title={'Kung Fu Panda 4'}  /> 
      <Title title={'Marley y yo'} size={'sm'} />
      <Title title={'Diario de una pasión'} size={'md'} />
      <Title title={'Kung Fu Panda 4'} size={'lg'} />  */}
      {/* <ComponentePadre text={'Hola a todos y todas!'} /> */}
      {/* <button onClick={() => setButtonText('Hiciste clic!')}>{buttonText}</button> */}
      <button onClick={decrementar}>Decrementar</button>
      <p>{counter}</p>
      <button onClick={incrementar}>Incrementar</button>

    </>
  )
}

export default App
