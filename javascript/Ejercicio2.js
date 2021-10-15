var array = [1,2,3,4,5,6,7];
console.log("El array original: ["+array+"]");
for (var i = 0; i < array.length; i++) {
    array[i] = array[i]+1;
}
console.log("El array modificado es: ["+array+"]");