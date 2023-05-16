let formu=document.getElementById('fonbdjbgfdj');


formu.addEventListener('submit',(e)=>{        
    e.preventDefault();
    const formu = e.target;
    user(formu);
    formu.classList.toggle("fomulario1")
})
async function user(formu){    
    const datos = {
        nombre: formu.nombre.value,
        usuario: formu.usuario.value,
        contrasena: formu.contrasena.value,
        email: formu.email.value,        
    } ;
    await fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(datos)
    })
}