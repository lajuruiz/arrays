// ejercicio 1 arrys

var array=[1,2,3,4,5,6]

for(var i = 0; i < array.length; i++){
    document.write(array[i]);
}


// b 

var array=[1,2,3,4,5,6]
var i=0;
while(i < array.length){
    document.write(array[i]);
    i++;
}

//c
var array=[1,2,3,4,5,6]
var i=0;
array.forEach(function(elemento,indice, array){
    document.write(elemento)
})

//d

var array=[1,2,3,4,5,6]
for (var i=0; i < array.length; i++){
    array[i] +=1
    document.write(array[i])
}

//e 
var array=[1,2,3,4,5,6]
var copiaArray=array.slice(0,array.length);
 for (var i=0; i < copiaArray.length; i++){
     copiaArray[i] +=1
     document.write(copiaArray[i])
    }
//f

var array=[1,2,3,4,5,6,4,5,6,7,89,0,4]
var acumulador=0;
var length=array.length
for (var i=0; i < array.length; i ++){
    acumulador += array[i]
    document.write(array[i])
   }
console.log(acumulador/length)

//ejercicio
var str= "A";
var str2="";
for (var i=0;i<5;i++){
str2+=str
}
console.log(str2);


//ejercicio 2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var array1=[]
var array2=[]
for (var i=0; i<20; i++){
    array1.push(getRandomInt(0,20))
    array2.push(Math.random())
}
console.log(array1);
console.log(array2);

// ejercicio 3

var arrayx=[]
var N=prompt(parseInt("ingresar valor de N"))
for (i=0; i<N; i++){
    arrayx.push(Math.random())
}
console.log(arrayx);

//ejercicio 4

var arrayc=["azul","amarillo","rojo","verde","cafe","rosa"]
var c=prompt("ingresar color")
var colorexiste=false; // ser inocente hastaque se demuestre lo contrario
for(i=0; i < arrayc.length;i++){
    colorexiste=colorexiste||(c===arrayc[i])
}

if (colorexiste){
    console.log("esta dentro del array")   
}
else {
    console.log("No esta dentro del array")
}
