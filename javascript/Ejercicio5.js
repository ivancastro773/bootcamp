var var1=[1,2,4,6,7,8];
var var2=[1,2,4,5,6,7,8];

//concateno los dos vectores
var varConcatenada = var1.concat(var2);
//los ordeno de menor a mayor
var vectorOrdenado = varConcatenada.sort();
//elimino los valores duplicados
var vectorFinal = new Set(vectorOrdenado);

console.log("El vector final es: ",vectorFinal );