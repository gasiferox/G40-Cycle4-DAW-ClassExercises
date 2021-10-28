/* let numeroA = 10
let numeroB = 10
let numeroC = null
let numeroD = null

numeroC = numeroA++
numeroD = ++numeroB

console.log("A = " + numeroA)
console.log("B = " + numeroB)
console.log("C = " + numeroC)
console.log("D = " + numeroD)


let numero = null
for(numero = 1; numero < 11; numero ++)
{
    console.log("Numero " + numero)
} */

window.onload = function()
{
    console.log("hola doggy")

    document.getElementById("ejecutar").addEventListener("click", function(e)
    {
        var areaGenerada = document.getElementById("generado")
        var areaGenerada2 = document.getElementById("generado2")

        console.log("hola doggyx2")

        areaGenerada.innerHTML = "for( let x = " + document.getElementById("inicio").value + " ; x <=  " + document.getElementById("final").value + "; x++ ) {\n" + " console.log( '-' + x );\n" + "}\n\n"

        for(let y = document.getElementById("inicio").value; y <= document.getElementById("final").value; y++) {
            /* console.log(x) */
            areaGenerada2.innerHTML += y + "\n";
        }

        /* for (let x = document.getElementById("Inicio").value; x <= document.getElementById("Final").value; x++) {
            areagenerada.value += x + "\n"
        } */

    })
}