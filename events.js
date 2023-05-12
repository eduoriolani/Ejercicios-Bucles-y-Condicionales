/* Ejercicio Nº1 */

// let formulario = document.getElementById("form-body");
// const peso = document.getElementById("peso");
// const altura = document.getElementById("altura");
// const resultado = document.getElementById("resultado");

// function calcularIMC(pesoIngresado,alturaIngresada){
//     return pesoIngresado / ((alturaIngresada) / 100) ** 2;
// }
// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     resultado.value = calcularIMC(peso.value, altura.value);
//     return resultado.value
// })

/* Ejercicio Nº2 */

// let formulario = document.getElementById("formulario")
// const pesoArg = document.getElementById("pesoArg")
// const dolar = document.getElementById("dolar")
// const resultado = document.getElementById("resultado")


// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     let pesos = parseFloat(pesoArg.value)
//     let dolares = parseFloat(dolar.value)
//     if (pesos){
//        pesoArg.value = "" 
//        let mensaje = `El resultado del cambio de pesos a dolares es de: ${cambioPesos(pesos).toFixed(2)}`
//        resultado.textContent = mensaje
//     }
//     if (dolares){
//         dolar.value = ""
//         let mensaje = `El resultado del cambio de dolares a pesos es de: ${cambioDolar(dolares).toFixed(2)}`
//         resultado.textContent = mensaje
//     }
// })

// function cambioPesos(monedaUno){
//     const pesos = 140
//     return monedaUno / pesos;
// }
// function cambioDolar(monedaDos){
//     const pesoDolar = 140
//     return monedaDos * pesoDolar;
// }

/* Ejercicio Nº3 */


const form = document.getElementById('form-home')
const inputTitulo = document.getElementById('titulo-nueva-nota')
const textArea = document.getElementById('descripcion-nueva-nota')
const btnBorrarForm = document.querySelector('#form-home input[value="borrar"]')
const contenedorNotas = document.getElementById( 'container-notas' )
const inputBusqueda = document.getElementById( 'busqueda' )
const checkbox = document.getElementById( 'realizadas' )
let notas = [
    {
        titulo: 'Salir a caminar',
        descripcion: 'Deporte',
        realizada: false,
        id : 0
    },
    {
        titulo: 'Comprar verduras en el super',
        descripcion: 'Comida',
        realizada: false,
        id : 1
    },
    {
        titulo: 'Andar en bicicleta',
        descripcion: 'Deporte',
        realizada: false,
        id : 2
    },
]
let idNotas = 3

pintarArticles( notas, contenedorNotas )

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputTitulo.value && textArea.value) {
        let nota = {
            titulo: inputTitulo.value,
            descripcion: textArea.value,
            realizada: false,
            id : idNotas
        }
        idNotas++
        reiniciarForm(inputTitulo, textArea)
        notas.push(nota)
        pintarArticles( notas, contenedorNotas )
    } else {
        alert('Todos los campos son obligatorios')
    }
    console.log(notas)

})

btnBorrarForm.addEventListener('click', () => {
    reiniciarForm(inputTitulo, textArea)
})

contenedorNotas.addEventListener( 'click', (e) => {
    let dataSet = e.target.dataset
    console.log([ e.target] ) 
    if(dataSet.accion == "borrar"){
        notas = notas.filter( nota => nota.id != dataSet.id )


        pintarArticles( notas, contenedorNotas )
    }
    if(dataSet.accion == "estado"){
        const nota = notas.find( nota => nota.id == dataSet.id )
        nota.realizada = !nota.realizada
    }
} )


inputBusqueda.addEventListener( 'input', () => {
    const filtrarPorBusqueda = filtrarPorTitulo( notas, inputBusqueda.value )
    if( checkbox.checked ){
        const filtradoPorRealizadas = filtrarPorRealizadas( filtrarPorBusqueda )
        pintarArticles( filtradoPorRealizadas, contenedorNotas )
    }else{
        pintarArticles( filtrarPorBusqueda, contenedorNotas )
    }
})


checkbox.addEventListener( 'change', () => {
    const filtrarPorBusqueda = filtrarPorTitulo( notas, inputBusqueda.value )
    if( checkbox.checked ){
        const filtradoPorRealizadas = filtrarPorRealizadas( filtrarPorBusqueda )
        pintarArticles( filtradoPorRealizadas, contenedorNotas )
    }else{
        pintarArticles( filtrarPorBusqueda, contenedorNotas )
    }
})


function filtrarPorRealizadas( notas ) {
    return notas.filter( nota => nota.realizada )
}

function filtrarPorTitulo( notas, busqueda ) {
    return notas.filter( nota => nota.titulo.toLowerCase().includes( busqueda.toLowerCase() ) )
}

function reiniciarForm(input, text) {
    input.value = ""
    text.value = ""
}

function pintarArticles( notas, contenedor ){
    let template = ""
    for( let nota of notas){
        template += crearArticle( nota ) 
    }
    contenedor.innerHTML = template
}

function crearArticle(nota) {
    let estado = ''
    if( nota.realizada ){
        estado = 'checked'
    }
    return `<article class="card col-3">
                <header class="card-header">
                    <div class="form-check">
                        <input class="form-check-input" data-accion="estado" data-id="${nota.id}" type="checkbox" ${estado} value="" id="">
                        ${nota.titulo}
                    </div>
                </header>
                <main class="card-body"> <p> ${nota.descripcion} </p> </main>
                <footer class="card-footer d-flex justify-content-center">
                    <button class="btn btn-danger" data-accion="borrar" data-id="${nota.id}">Borrar nota</button>
                </footer>
            </article>
`
}