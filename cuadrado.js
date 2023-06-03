const cdrd = require("./calculo")

var area = cdrd.area_cdrd(7, 9)
console.log(`Calculando el Area...`)
console.log(`El Area es: ${area}`)
var prmet = cdrd.perimetro_cdrd(60)
console.log(`Calculando el Perimetro...`)
console.log(`El Perimetro es: ${prmet}`)

console.log(`Calculando la suma del Area + Perimetro...`)
console.log(`Generando Hash de la suma del Area + Perimetro...`)
console.log(`El Hash generado es: ${cdrd.ar_per_hash(area, prmet)}`)