async function obtenerDatos(form2){
   
  let datos =  await fetch(`http://localhost:3000/users?usuario=${form2.usuario}&contrasena=${form2.contraseña}`,{
      method:'GET',
      headers:{
          "Content-Type":"application/json"
      }
  })  

  datos = await datos.json();

  return datos;
  
}

async function loguear(form2){    
  const llog={
      contraseña:form2.contraseña.value,
      usuario:form2.usuario.value
  }
 
  let datos = await obtenerDatos(llog);  

   if(datos.length > 0 && form2.contraseña.value.length > 0){
       
       
       window.location.href='/section2/index.html'
  }else if(form2.contraseña.value.length == 0 && form2.usuario.value.length == 0 ){
    alert("digite el usuario y la contraseña")
  }else if(form2.contraseña.value.length == 0 ){
    alert("digite la contraseña")
  }else if(form2.usuario.value.length == 0 ){
    alert("digite el usuario")
  }else{
    alert("usuario o contraseña incorrectos")
  }

   
}


let form2= document.querySelector("#hhh")

form2.addEventListener('submit', (e)=>{
  e.preventDefault();
  const form2= e.target;    
  loguear(form2)
  obtenerDatos(form2)
})



    

    

