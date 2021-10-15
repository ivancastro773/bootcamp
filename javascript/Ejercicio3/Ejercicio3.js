var array=[];

function numRandom(max,min,n) {
    for (var i = 0; i < n; i++) {
       var num = Math.floor(Math.random()* (max - min + 1) + min);
       array.push(num);
    }
    alert("El array contiene "+n+" numeros aleatorios \n["+array+"]");
}

var n = Number(window.prompt("Ingrese la cantidad numeros: "));
numRandom(2,10,n);
