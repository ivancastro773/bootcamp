var array = [4,5,9,2,10,7,15];
console.log("El array original es: ["+array+"]");

var arrayOrdenado = array.sort(function (a, b) {
    return a - b;
});

console.log("El array ordenado es: ["+arrayOrdenado+"]");