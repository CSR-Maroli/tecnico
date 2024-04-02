function destino(){
const destino1 = "escola"
const destino2 = "trabalho"
if (destino1 === "escola"){
    return console.log("direita")
}else if (destino2 === "trabalho"){
    return console.log("Esquerda")
}else{
    return console.log("parado")
}
}
console.log(destino("destino2"))