import './App.css'
import React, {useCallback, useEffect, useReducer, useState} from 'react'

// definindo as ações adicionar, marcar como feito e deletar das tarefas
const taskReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TAREFA':
      return [...state, action.payload] // payload é o novo valor da tarefa sendo adicionada
    case 'CONCLUIDO':
      const atualizarTarefa = [...state]
      atualizarTarefa[action.payload].completed = true
      return atualizarTarefa
    case 'REMOVER':
      return state.filter((_, index) => index !== action.payload)
    default:
      return state
  }
}

function App() {
  const [tarefa, setTarefa] = useState('')
  const [tarefaAtual, dispatch] = useReducer(taskReducer, [], () => {
    const armazenarTarefa = JSON.parse(localStorage.getItem('tarefaAtual'))
    return armazenarTarefa ? armazenarTarefa : []
  })

  // dispatch - função utilizada para despachar as ações para o useReducer executar
  useEffect(() => {
    localStorage.setItem('tarefaAtual', JSON.stringify(tarefaAtual))
  }, [tarefaAtual])

  // função adicionar tarefa
  const addTarefa = useCallback(() => {
    // usando o callback para que as tarefas permaneçam as mesmas entre as renderizações
    // verificar se a tarefa não está vazia para que ela seja adicionada
    if (tarefa.trim() !== '') {
      dispatch({type: 'ADD_TAREFA', payload: {text: tarefa, completed: false}})
      setTarefa('')
    }
  }, [tarefa])

    //funcao marcar tarefa como concluida
  const concluirTarefa = useCallback((index) =>{
    dispatch ({type: 'CONCLUIDO', payload: index})
    //disparando ação tipo concluido para o useReducer
    //usando o meu dado atual (payload) a partir do seu index (posição)
  })

  const removerTarefa = useCallback((index) =>{
    dispatch ({type: 'REMOVER', payload: index})
  })
  return (
    <>
      <div className="center">
        <h1>Lista de Tarefas</h1>
        <div className="input">
          <input 
            type="text"
            placeholder='Nova Tarefa'
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
          <button className='ad' onClick={addTarefa}>Adicionar</button>
        </div>
        <ul className='lista'>
          {/* Criando nossa lista de tarefas vamos usar .map para mapear cada tarefa da lista, seguindo um index de posição de cada tarefa */}
          {tarefaAtual.map((tarefas, index) => (
            // Começando a lista de cada tarefa
            <li key={index}>
              <span style={{ textDecoration: tarefas.completed ? 'line-through' : 'none' }}>
                {/*adicionando style que verifica se a tarefa foi marcada como completed e adiciona um riscado, se nao foi marcada, nao tem nada de textDecoration*/}
              {tarefas.text}
              </span>
              {
                //verificar se a tarefa atual foi adicionada e se não esta concluida
                //pq o completed inicial foi marcado como false
                !tarefaAtual.completed && (
                  <>
                  {/*botao que chama funcao concluir tarefa a partir do seu index (posicao) */}
                  <button onClick={() => concluirTarefa(index)}>
                  Concluir tarefa
                </button>
                <button onClick={() => removerTarefa(index)}>
                  Remover Tarefa
                </button>
                  </>
                )
                }
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
