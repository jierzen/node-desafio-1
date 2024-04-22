const fs = require('fs')

const nuevoRegistro = {}

const registrar = (nombre,edad,tipo,color,enfermedad) => {

    let registrosExistentes = []

    if(fs.existsSync('citas.json')){
        const contenido = fs.readFileSync('citas.json', 'utf8')
        registrosExistentes = JSON.parse(contenido)
    }

    const nuevoRegistro = {
        nombre: nombre,
        edad: edad,
        tipo: tipo,
        color: color,
        enfermedad: enfermedad
    }

    registrosExistentes.push(nuevoRegistro)

    fs.writeFileSync('citas.json',JSON.stringify(registrosExistentes, null, 2))
}

const leer = () => {
    const registroMascotas = fs.readFileSync('citas.json', 'utf8')
    JSON.parse(registroMascotas).forEach(mascota => {
        console.log(mascota)
    })
}

module.exports = { registrar, leer }