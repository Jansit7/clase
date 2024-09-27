alert("Hola Antonia!");

/*
Tipos de variables en js
var   --- Alcance Global
let   --- Alcance Local
const --- Constante no cambia
*/

var numero = 5
var numero2 = 5
var resultado = numero * numero2
console.log(resultado)

var numero3 = "2"
var resultado = numero + numero3
console.log(resultado)

var resultado = numero * Number(numero3)
console.log(resultado)

var nombre = apellido1 = apellido2 = ""
function datosFormulario(){
    console.log ("Nombre: " + nombre + " " + apellido1 + " " + apellido2)
}
datosFormulario()

nombre = "Anto"
apellido1 = "Linda"
apellido2 = "Linda"
datosFormulario()

//Objetos = {} llave:Valor
//Array   = [] Posiciones

// Objeto: 
let carro = {
    "color": "blanco",
    "tipo":"camioneta",
    "capacidad":7
}
console.log("Imprime dato COLOR del objeto: ", carro.color)


// Arreglos:
let carros2 = [] // Definir un arreglo

carros2 = [
{
    "color": "negro",
    "tipo":"camioneta",
    "capacidad":5
},
{
    "color": "azul",
    "tipo":"camioneta",
    "capacidad":8
}
]

dato = carros2[0].color
console.log("Imprime del arreglo, el color del carro de la 1ra posicion ",carros2[0].color)

dato = carros2[1].color
console.log("Imprime del arreglo, el color del carro de la 2da posicion ",dato)