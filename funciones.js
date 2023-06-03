function suma(n1, n2){
    return n1+n2
}

function resta(n1, n2){
    return n1-n2
}

function multiplicacion(n1, n2){
    return n1*n2
}

function division(n1, n2){
    if (n2 == 0)
        return "No se puede dividir"
    else
        return n1/n2
}

/*console.log("La suma es: " , suma(35, 5))
console.log("La resta es: " , resta(50, 4))
console.log("La multiplicacion es: " , multiplicacion(3, 4))
console.log("La division es: " , division(46, 6))
console.log("La division es: " , division(38, 0))*/

module.exports = {suma, resta, multiplicacion, division}
//module.exports.suma = suma
console.log(module.exports)