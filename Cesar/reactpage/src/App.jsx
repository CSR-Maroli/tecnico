import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Carros from './componentes/Carros'
import Sobre from './componentes/Sobre'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Carros />
      <Sobre />
    </div>
  )
}

export default App
