function CantidadMayusculas(cadena) {
    var cantidad = 0;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                cantidad+=1;
            }
        }
    }
    return console.log("La palabra '"+cadena+ "' contiene: " + cantidad +" Mayúsculas.");
}

CantidadMayusculas("Me LLAmO IvaN CaSTRo");