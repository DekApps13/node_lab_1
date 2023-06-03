//1
console.log("Hola Mundo")

//2
var nombre="Derek Villarreal", edad=22
console.log("El nombre es " + nombre , " La edad es ", edad)

//3
console.log(`El nombre es ${nombre} la edad es ${edad}`)

//4
var n1 = 100, n2 = 50
console.log(`La suma de las variables es ${n1 + n2}`)

//5
if (n1>n2)
    console.log(`El mayor es ${n1}`)
else
    console.log(`El mayor es ${n2}`)

//6
var arreglo = [45, 39, 106, 89, 32]
for (var n=0; n<arreglo.length; n++)
    console.log(arreglo[n])

for (var i=1; i<=100; i++)
    arreglo.push( (Math.random()*10).toFixed(0) )

//7
arreglo.forEach(function(numero){
    console.log(numero)
})

console.log("Otra Manera")
arreglo.forEach((numero)=>{
    console.log(numero)
})

//8
var persona = {"nombre":"Samuel Gfeller", 
               "edad":"22", 
               "direccion":"Las Mañanitas"}

console.log(persona.nombre)
console.log(persona)
console.log(persona.edad)
