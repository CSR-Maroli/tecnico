function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
  }
  
  function classificarAluno(media) {
    if (media >= 8) {
      return 'Aprovado com conceito A';
    } else if (media >= 6) {
      return 'Aprovado com conceito B';
    } else {
      return 'Reprovado com conceito C';
    }
  }
  
  function imprimirResultado(notas) {
    let media = calcularMedia(notas);
    let resultado = classificarAluno(media);
    console.log(`Média: ${media}`);
    console.log(`Resultado: ${resultado}`);
  }
  
  let notas = [8, 6, 7, 9];
  imprimirResultado(notas);
  