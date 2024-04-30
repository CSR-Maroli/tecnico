import Evento from "./componentes/Evento"
import './App.css'
import Galeria from "./componentes/Galeria"
import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"

function App() {

  return (
    <>
    <Cabecalho />
     <Evento 
      titulo={"Senai"}
      descricao={"Venha fazer parte dessa era de gamers. Aqui no SENAI, para a nossa próxima gincana, tivemos a idéia de trazermos todas as nossas habilidades para campo. Traga o seu computador e venha participar de várias competições."}
      horario={"18:00"}
      local={"Na casa do melhor(João Pedro Benvenutti Vidal Cardoso)"}
     />
     <Galeria />
      <Rodape />
    </>
  )
}

export default App
