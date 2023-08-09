//convertir una variable numerica en un string
let a = 5.62154;
console.log(typeof a);
a = a.toString();
console.log(typeof a);

// toPrecision permite ver la cantidad de numeros que tu quieras ver de la operacion
let b = 3.23234;
b = b.toPrecision(2)
console.log(b);

// Number: nos ayuda a convertir variables en string a variables en numeros 
let c = Number("1234.324");
console.log(c);

// parseFloat y parseInt tambien nos convierten las variables numericas que esten en tipo string a numeros pero de forma entera o de forma decimal
parseFloat("1234.324");
parseInt("1234.324");

