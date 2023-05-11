const url = ' http://localhost:3000/categoria'
//no supe consumir el appi pero el codigo era asi 
const contenedor= document.querySelector('tbody')
let resultado=''
//const modalArticle= new bootstrap.Modal(document.querySelector('.m1'))
const formarticle=document.querySelector('FORM')
const nombre=document.getElementById('nombre')
let opcion =''

/* crearbtn.addEventListener('click', ()=>{
    modalArticle.show()
}) */

//funcion para mostrar los resultados
const mostrar = (categorias)=>{
    categorias.forEach(categoria=>{
        resultado +=`
        <tr>
            <td>${categoria.id}</td>
            <td>${categoria.nombre}</td>      
            <td class="text-center"><button type="button" class="btn btn-warning btnBorrar" >borrar</button></td>


        </tr>
    `
    })
    contenedor.innerHTML=resultado
   
}

fetch(url)
.then(res=>res.json())
.then(data =>mostrar(data))
.catch(error=>console.log(error))