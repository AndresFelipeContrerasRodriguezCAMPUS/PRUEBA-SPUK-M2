const url = 'http://localhost:3000/api/articulos/'

const contenedor= document.querySelector('tbody')
let resultado=''

const modalArticle=new bootstrap.modal1(document.getElementById('m1'))
const formarticle=document.querySelector('form')
const nombre=document.getElementById('nombre')
let opcion =''

crearbtn.addEventListener('click', ()=>{
    modalArticle.show()
})
//funcion para mostrar los resultados
const mostrar = (articulos)=>{
    articulos.forEach(element=>{
        resultado +=`
        <tr>
            <td>${articulos.id}</td>
            <td>${articulos.nombre}</td>      
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