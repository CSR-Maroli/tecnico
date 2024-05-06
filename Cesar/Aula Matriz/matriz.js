let button, quebralinha, jogada = 1

let tabuleiro = new Array(3)
    for(let i=0;i<tabuleiro.length;i++){
        tabuleiro[i] = new Array(3)
    }
for(let i=0;i<tabuleiro.length;i++){
    quebralinha = document.createElement('br')
    document.body.append(quebralinha)
    for(let j = 0;j< tabuleiro[i].length;j++){
        button = document.createElement('button')
        button.setAttribute('type','button')
        button.setAttribute('id', 'bt' + i + "" + j)
        button.setAttribute('class', 'btJogo' + i)
        button.setAttribute('onclick', 'marca'+ i +"" + j + "()")
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}
function marca00(){
    marcaCasa("bt00")

}
function marca01(){
    marcaCasa("bt01")

}
function marca02(){
    marcaCasa("bt02")

}
function marca10(){
    marcaCasa("bt10")

}
function marca11(){
    marcaCasa("bt11")

}
function marca12(){
    marcaCasa("bt12")

}
function marca20(){
    marcaCasa("bt20")

}function marca21(){
    marcaCasa("bt21")

}function marca22(){
    marcaCasa("bt22")

}
function marcaCasa(nomeBotao){
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerText= "O"

    }else{
        document.getElementById(nomeBotao).innerText= "X"
    }
    jogada++
}