let interval = window.setInterval(()=>{
    let lista = ["red","green"]
    let numero1 = Math.random()
    let numero = Math.round(Math.random())
    let etiqueta = document.querySelector("#num1234")
    etiqueta.style.color= lista[numero]
},1000)