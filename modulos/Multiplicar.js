const fs = require("fs");
const colors = require("colors")
const crearArchivo = async(base= 1, mostrar) => {
    let salida = "";
    salida+=`TABLA DE MULTIPLICAR DEL ${base}\n`;
    for(let i=1; i<11; i++){
        salida+=`${base}  ${colors.red("X")} ${i} ${colors.yellow("=")} ${base*i}\n`;
    }
    if(mostrar) console.log(salida);

    try{
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    }
    catch (err){
        return err;
    }

    return `tabla-${base}.txt`;

}
module.exports = {
    crearArchivo
}