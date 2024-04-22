# Veterinaria JS
### Desafio 1 modulo Node [Desafio LATAM]

### Tecnologias usadas
1. Ejecutar scripts con Node Js desde la terminal 
2. Crear y Leer archivos con el módulo File System
3. Importar y exportar módulos en Node Js
4. Utilizar argumentos escritos por línea de comandos

#### Archivo operaciones.js
```javascript
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
```

#### Archivo index.js
```javascript
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

```

#### Ejecuciones desde la terminal:
```console
$ node index.js registrar cachupin "2 años" perro blanco vomitos
$ node index.js registrar zoroastro "9 años" gato "cafe con manchas blancas" diarrea

```

#### Resultados en citas.json
```json
[
  {
    "nombre": "cachupin",
    "edad": "2 años",
    "tipo": "perro",
    "color": "blanco",
    "enfermedad": "vomitos"
  },
  {
    "nombre": "zoroastro",
    "edad": "9 años",
    "tipo": "gato",
    "color": "cafe con manchas blancas",
    "enfermedad": "diarrea"
  }
]
```


### by Jorge Espinoza
