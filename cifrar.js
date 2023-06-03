//15
//15.c
const bc = require("bcryptjs")

//15.d
bc.genSalt(10, (err, salt)=>{
    if(err)
        console.log(err)
    else{
        //15.e
        bc.hash("Esto es la contraseña", salt, (error, hash)=>{
            if(error)
                console.log(error)
            else
                console.log(hash)
        })
    }
})

console.log("Esto va primero")

//15.f
var salt = bc.genSaltSync(10)
console.log("Salt generado de manera sincrona: ", salt)

//15.g
var hash = bc.hashSync("giberto-VP09", salt)
console.log("Hash generado de manera sincrona: ", hash)

//15.h
var comparar = bc.compareSync("giberto-VP09", "$2a$10$22wfele.4D0poaNUV18Eu.2kY1VeUz7HZwBrt0e4vwDcif7k0RwMC")
console.log(comparar)