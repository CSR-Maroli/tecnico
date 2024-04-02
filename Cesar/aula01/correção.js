function destino(x){
    const destino1 = "direita"
    const destino2 = "esquerda"
    
    if(x === destino1){
        return console.log("trabalho")
    }else if(x === destino2){
        return console.log("Escola")
    }else{
        return console.log("parado")
    }
}
destino("direita")
destino("esquerda")
destino(3)