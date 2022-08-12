
const formulario = document.getElementById('form')

formulario.addEventListener('submit',submitForm)

/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
    document.getElementById('page').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
}
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
    document.getElementById('page').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
}

//Preguntar a Fabi ------- objeto vacio? con datos? RAAAAAARO
function submitForm (e) {
    e.preventDefault()
    const data = new FormData(this)
    //console.log(data);
    let objSubmit = {
        'Nombre': `${data.get('name')}`,
        'Email': `${data.get('email')}`,
        'Mensaje': `${data.get('mensaje')}`
    }
    console.log(`Nombre: ${data.get('name')}`)
    console.log(`Email: ${data.get('email')}`)
    console.log(`Mensaje: ${data.get('mensaje')}`)
    console.log(objSubmit);
}
