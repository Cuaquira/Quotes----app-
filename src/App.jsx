
import { useState } from 'react';
import './App.css'
import Author from './Author';
import Quotes from './Quotes'
import quotes from './quotes.json'
/*  */
const GetRandom = () => Math.floor(Math.random() * quotes.length) /* Funcion para generar una cita aletoria */
const colors = ["#0081CF", "#845EC2", "#FF9671", "#008F7A", "#2C73D2", "#845EC2", "#00C9A7", "#4D8076", "#C34A36", "#4FFBDF", "#4B4453"] /* variable para despues generar un color random */

function App() {

  const [quote, setQuote] = useState(quotes[GetRandom()]);

  const changeCita = () => {  /* Funcion para pasar por props al componente Author y generar el onclick */
    setQuote(quotes[GetRandom()]);
  }
  const color = colors[Math.floor(Math.random() * 11)]; /* Funmcion para generar los colores random */
  document.body.style = `Background: ${color}`   /*  para que los fondos externos sean aletorios y tomen de la raiz */

  return (
    <div className="App">
      <Quotes quote={quote} color={color} />
      <Author quote={quote} changeCita={changeCita} color={color} />
    </div>
  )
}

export default App
