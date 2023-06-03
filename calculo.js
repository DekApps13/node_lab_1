//16
const bc = require("bcryptjs")

function area_cdrd(a, b){
    return b*a
}

function perimetro_cdrd(d){
    return d*4
}

function ar_per_hash(area, prmet){
    var suma = area+prmet
    var suma_s = suma.toString()

    var salt = bc.genSaltSync(10)
    var hash = bc.hashSync(suma_s, salt)
    return hash
}

module.exports = {area_cdrd, perimetro_cdrd, ar_per_hash}