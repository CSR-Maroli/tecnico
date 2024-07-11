import React, { useState } from 'react';
import Header from './components/Header';
import Clubs from './components/Clubs';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header name="Nome do Aluno" turma="Turma do Aluno" onSearch={handleSearch} />
      <Clubs searchTerm={searchTerm} />
    </div>
  );
}

export default App;