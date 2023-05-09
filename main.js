

const logi=document.getElementById('registrar')
const bodyy=document.querySelector('div1')


registrar.addEventListener('click',()=>{
        bodyy+= `<div class="card text-center gg">
        <div class="card-header">
            <button type="button" class="btn btn-warning b1 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                login
            </button>
            <div class="modal fade" id="exampleModal" id="m1"tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header usuario bg-warning">
                      <h5 class="modal-title" id="exampleModalLabel">Registro de nueva categoria</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <form>
                    </div>
                                <div class="m-3 position-relative">
                                    <b>usuario</b>
                                    <input type="text" class="form-control usuario" data-bs-toggle="modal" data-bs-target="#exampleModal" id="nombre">
                                </div>
                                <div class="m-3 position-relative">
                                    <b>contraseña</b>
                                    <input type="text" class="form-control password2" data-bs-toggle="modal" data-bs-target="#exampleModal" id="nombre">
                                </div>
        
                    </div>
                    </form>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-warning re" id="registrar">entrar</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>`
    });
    

    

