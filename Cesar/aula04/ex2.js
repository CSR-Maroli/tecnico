let nota, media, resultado, cont = 0, acumula = 0

while(cont<3){
numero = Number(prompt("Digite sua nota:"))
acumula += nota //acumula = acumula + nota
cont++
}
media = acumula / 3
if(media >= 7.0){
    resultado = "Aprovado"
}else{
    if(media>=3){
        resultado = "recuperação!"
    }else{
        resultado = "Reprovado"
    }
}
media = acumula / 3
resultado = media >=7 ? "Aprovado" : media >= 3 ? "Rec" : "reprovad"
alert(resultado)

