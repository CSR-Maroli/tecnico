export default function Livro({titulo, autor, ano, Sinopse}){
    return(
        <section className="sobrelivro">
            <div className="Informacoes">
                <h1>{titulo}</h1>
                <p>{autor}</p>
                <p>{ano}</p>
                <p>{Sinopse}</p>
            </div>
            <img src="https://m.media-amazon.com/images/I/81u8qVhF9uL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="imagem"></img>
        </section>
    )
}