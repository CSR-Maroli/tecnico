function criarLogin(){
    let usu = document.getElementById("user").value
    let sen = document.getElementById("pass").value

    localStorage.setItem("user", usu)
    localStorage.setItem("senha", sen)

}