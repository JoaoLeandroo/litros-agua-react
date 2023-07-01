import { useState} from 'react'
import './App.css'
import Header from './component/Header'

function App() {

  const [input, setInput] = useState('')
  const [resultInput, setResultInput] = useState('')

  function calcular(){
    
    if(input === "" || input === '0'){
      alert("Informe o seu peso corretamente, em KG.")
      setInput('')
      return
    }

    const valueInput = 35 * parseFloat(input)
    if(valueInput < 1000) {
        setResultInput("Necessario " + valueInput + "ML de água por dia") 
        setInput('')
        return
    }

    const formatterValue = valueInput.toLocaleString()
    const formatterValueToNumber = parseFloat(formatterValue)
    const result = formatterValueToNumber.toFixed(1)

    setResultInput("Necessario " + result + 'L de água por dia.')
    
    setInput('')
    
  }
  return (
    <>
      <Header/>

      <section>
        <h3>Informe o Seu Peso</h3>
        <p>Descubra quantos litros de água beber no dia!</p>
          <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={calcular}>Enviar</button>
          <h2>{resultInput}</h2>
      </section>
    </>
  )
}

export default App
