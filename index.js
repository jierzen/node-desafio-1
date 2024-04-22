const { registrar, leer } = require('./operaciones.js')

const argumentos = process.argv.slice(2)

const operacion = argumentos[0]

if (operacion === 'registrar'){
    nombre= argumentos[1]
    edad= argumentos[2]
    tipo= argumentos[3]
    color= argumentos[4]
    enfermedad= argumentos[5]
    registrar(nombre,edad,tipo,color,enfermedad)
}

if(operacion === 'leer'){
    leer()
}



