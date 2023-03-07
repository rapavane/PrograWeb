//const base = (process.argv[2].split("="))[1];
//const mostrar = (process.argv[3].split("="))[1];

const var1 = require("yargs")
    .option("b",{
        alias: "base",
        type: "number",
        default: 1
    })
    .option("l",{
        alias: "listar",
        type: "boolean",
        default: false
    }).argv;

const base = var1.base;
const listar = var1.listar;

console.log(var1);


//let listar;
//if(mostrar==="false") listar=false;
//else listar=true;
const {crearArchivo} = require("./modulos/Multiplicar");
console.clear();
crearArchivo(base, listar)
.then(nombreArchivo => console.log(nombreArchivo, "Creado"))
.catch(err => console.log(err));
/*
console.log(base);
console.log(mostrar);*/