//13
const fs = require("fs")

fs.readFile("./numeros.txt", (err, dato_num1)=>{
    if (err)
        console.log(err)
    else
        console.log(dato_num1.toString())
})

fs.readFile("./numeros2.txt", "base64", (err, dato_num2)=>{
    if(err){
        console.log("Error=>")
        console.log(err)
    }
    else{
        //console.log(dato_num2.toString())
        var dato_num2_r = (dato_num2.toString()).replace("", "-")
        console.log(dato_num2_r)
    }
})