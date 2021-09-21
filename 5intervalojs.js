let intervalo = window.setInterval(()=> {
    console.log("soy el intervalo")
},100)
window.setTimeout(()=>{
   console.log("se termino el intervalo")
   clearInterval(intervalo)
},5000)