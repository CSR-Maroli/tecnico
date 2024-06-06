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
          <button onClick={addTarefa}>Adicionar</button>
        </div>
        <ul>
          {/* Criando nossa lista de tarefas vamos usar .map para mapear cada tarefa da lista, seguindo um index de posição de cada tarefa */}
          {tarefaAtual.map((tarefas, index) => (
            // Começando a lista de cada tarefa
            <li key={index}>
              {tarefas.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
