
export default function Evento({titulo, descricao, horario, local}){
    return(
        <section className="evento">
            <div className="Informacao">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img src="https://www.hardware.com.br/static/00000000/img-8e48d445.jpg" alt="imagem"></img>
        </section>

    )

}