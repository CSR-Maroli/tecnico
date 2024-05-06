import './App.css'
import Banner from './Componentes/Banner'
import Footer from './Componentes/Footer'
import Galeria from './Componentes/Galeria'
import Header from './Componentes/Header'
import Livro from './Componentes/Livro'

function App() {

  return (
    <>
     <Header />
     <Banner />
     <Livro
     titulo={"Petrus Logus"}
     autor={"Augusto Cury"}
     ano={"6 de outubro de 2017"}
     Sinopse={"Quando as fontes de água secaram, as terras tornaram-se inférteis e a violência invadiu o planeta, a Catástrofe aconteceu. Agora, cem anos depois, o mundo volta a reestruturar-se e novos povos começam a surgir. O Reino de Cosmus, liderado pelo poderoso rei Apolo, tornou-se um grande império. Apoiado pelos seus cruéis conselheiros, Apolo prega que o conhecimento foi o responsável pela destruição do mundo e proíbe o uso da tecnologia, o acesso às escolas e aos livros. Porém, apesar do seu poder, Apolo não consegue controlar um dos seus filhos, o príncipe Petrus, que, ao contrário do irmão Lexus, não está interessado no poder e na guerra. Petrus gosta de aprender, foi educado pelo sábio Malthus para ser um líder justo e generoso e sofre as consequências de ser uma mente livre. Condenado a usar a Máscara da Humilhação, que pune os maiores criminosos do reino, o jovem príncipe tem de sobreviver para realizar a sua grande missão e tentar mudar o rumo da História. Petrus Logus - O Guardião do Tempo é um bestseller no Brasil, da autoria do médico, professor e escritor Augusto Cury."}
      />
    <h1 id='livros'>Livros</h1>
    <Galeria />
    <Footer />
    </>
  )
}

export default App
