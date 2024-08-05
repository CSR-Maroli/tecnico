function soma(a, b) {
    return a + b
  }
  
  let resultado = soma(2, 3)
  
  console.log(resultado)
  
  
  let objeto = {
    nome: 'João',
    idade: 30,
    endereco: 'Rua ABC, 123'
  }
  
  function imprimeNome(nome) {
    console.log(nome)
  }
  imprimeNome(objeto.nome)
  
  function multiplica(a, b) {
    return a * b
  }
  
  console.log(multiplica(2, 3))
  
  if (true) {
    console.log('Você corrigiu todos os erros!')
  }