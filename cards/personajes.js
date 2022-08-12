const urlAPI = 'https://rickandmortyapi.com/api/character'
const urlBusqueda = `https://rickandmortyapi.com/api/character/?name=`

const buscador = document.getElementById('buscador')
buscador.addEventListener('submit',inputBusqueda)

const pageUp = document.getElementById('up')
pageUp.addEventListener('click',cambiarPaginaUp)

const pageDown = document.getElementById('down')
pageDown.addEventListener('click',cambiarPaginaDown)

//variable global disponible para cualquier función, siempre actualizada con los datos del último fetch().
let DATA = {}
let paginaActual = 1 //contador
let paginasTotales = 1

async function cambiarPaginaUp (e) {
    e.preventDefault()
    console.log('cambio página +')
    console.log(DATA.info.next);
    const paginaUp = await fetch(DATA.info.next)
    const dataNext = await paginaUp.json()
    DATA = dataNext
    paginaSiguiente()
    totalDePaginas()
    const personajesNext = dataNext.results
    console.log(personajesNext);
    const listaPersonajes = mapear(personajesNext)
    document.getElementById('personajes').innerHTML = listaPersonajes
}

async function cambiarPaginaDown (e) {
    e.preventDefault()
    console.log('cambio página -')
    console.log(DATA.info.prev);
    const paginaDown = await fetch(DATA.info.prev)
    const dataPrev = await paginaDown.json()
    DATA = dataPrev
    paginaPrevia()
    totalDePaginas()
    const personajesDown = dataPrev.results
    console.log(personajesDown);
    const listaPersonajes = mapear(personajesDown)
    document.getElementById('personajes').innerHTML = listaPersonajes 
}

function inputBusqueda (e) {
    e.preventDefault()
    paginaActual = 1
    document.getElementById('pagina').innerHTML = paginaActual
    const busquedaText = new FormData(buscador)
    console.log(busquedaText);
    getPersonajes(busquedaText.get('nombreInput'))
}

function mapear(array) {
    let lista= []
    array.map((element) => {
        lista += 
        `<div class="card">
        <h3>${element.name}</h3>
        <img src='${element.image}'/>
        </div>`
    })
    return(
        lista
    )
}

function paginaSiguiente() {
    if (paginaActual >= 1 && paginaActual <= DATA.info.pages){
        paginaActual += 1
        console.log(paginaActual);
        return (
            document.getElementById('pagina').innerHTML = paginaActual
        )
    }
}
function paginaPrevia() {
    if(paginaActual > 1) {
        paginaActual -= 1
        console.log(paginaActual);
        return (
            document.getElementById('pagina').innerHTML = paginaActual
        )
    }
}
 function totalDePaginas() {
    paginasTotales = DATA.info.pages
    console.log('total páginas: '+ paginasTotales)
    return (
        document.getElementById('totalPaginas').innerHTML = paginasTotales
    )
 }

const getPersonajes = async (busqueda = '') => {
    let listaPersonajes = []
    let arrayParaMap = []
    //console.log(listaPersonajes);
    //console.log(arrayParaMap);
    //console.log(busqueda);
    const respuesta = await fetch(busqueda !== '' ? `${urlBusqueda}${busqueda}` : urlAPI)
    DATA = await respuesta.json()
    totalDePaginas()
    console.log(DATA);
    arrayParaMap = DATA.results 
    console.log(arrayParaMap);
    listaPersonajes = mapear(arrayParaMap) 

    document.getElementById('personajes').innerHTML = listaPersonajes
}
   
getPersonajes()

