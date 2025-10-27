//BLOQUE 1: Ejercicios con objetos simples 
// 1. Contar caracteres del nombre de un empleado

function contarCaracteres(empleado) {
    let nombre = empleado.nombre
    let lon = 0
    for (let i = 0; i < nombre.length; i++) {
        lon ++
    }
    return lon;
}

let empleado =  {"nombre": "Ana", "edad": 25}
let cantidad= contarCaracteres(empleado)
console.log ("El nombre " + empleado.nombre + " tiene " + cantidad + "caracteres")

//2. Contar apariciones de una vocal en el nombre de un producto

function contadorVocal(producto,vocal) {
    let nombre = producto.nombre;
    let cv = 0;
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i]==vocal) {
        cv++
        }
    }
    return cv;
}

let prod = { nombre: "Coca Cola", precio: 3 };
let cv = contadorVocal(prod,"o");
console.log("El número de vocales 'o' en ", prod.nombre, "es", cv);


//3. Invertir el nombre de una persona
function reverse(persona) {
    let nombre = persona.nombre;
    let invertido = "";
    let lon = nombre.length-1;
    for (let i = lon; i >=0; i--) {
        invertido= invertido+nombre[i]
    }
    return invertido;
}
debugger
let persona={nombre:"Carlos",edad:25};
persona.nombre=reverse(persona);
console.log("Nombre invertido:",persona);


//4. Comparar longitudes de nombres entre dos empleados
function compararNombres( empleado1 , empleado2) {

    let longitud1 = empleado1.nombre.length;
    let longitud2 = empleado2.nombre.length;
    let resultado

    if (longitud1 > longitud2) {
        resultado = "El empleado con el nombre más largo es " + empleado1.nombre + " " + longitud1 + " letras.";
    } else if (longitud2 > longitud1) {
        resultado ="El empleado con el nombre más largo es " + empleado2.nombre + " " + longitud2 + " letras.";
    } else {
        resultado = "Ambos empleados tienen nombres con la misma longitud " + longitud1 + " letras.";
    }
    return resultado;
}

let empleado1 = { nombre: "María", edad: 28 };
let empleado2 = { nombre: "Guillermo", edad: 35 };
resultado = compararNombres(empleado1, empleado2); 
console.log(resultado);




/* }function longitud(empleado) {
    let nombre = empleado.nombre;
    let lon = 0;
    for (let i = 0; i < nombre.length; i++) {
        lon++
    }
    return lon;
}
function longitudArreglo(empleados){
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        let lon = longitud(emp);
        console.log("La longitud de: ", emp.nombre, "es", lon);
    }
} 

function contadorVocal(producto,vocal) {
    let nombre = producto.nombre;
    let cv = 0;
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i]==vocal) {
        cv++
        }
    }
    return cv;
}
function reverse(persona) {
    let nombre = persona.nombre;
    let invertido = "";
    let lon = nombre.length-1;
    for (let i = lon; i >=0; i--) {
        invertido= invertido+nombre[i]
    }
    return invertido;
}
debugger
// let persona={nombre:"Carlos",edad:25};
// persona.nombre=reverse(persona);
// console.log("Nombre invertido:",persona);
// let prod = { nombre: "Coca Cola", precio: 3 };
// let cv = contadorVocal(prod,"o");
// console.log("El número de vocales 'o' en ", prod.nombre, "es", cv);
// let emp1 = { nombre: "Ana", edad: 30 };
// let len = longitud(emp1);
// console.log("La longitud de: ", emp1.nombre, "es",emp1.nombre.length );
// console.log("La longitud de: ", emp1.nombre, "es", len);
empleados = [
    {"nombre": "Ana", "edad": 22},
    {"nombre": "Santiago", "edad": 30},
    {"nombre": "Rosa", "edad": 27}
]
longitudArreglo(empleados);

empleados = [
    {"nombre": "Ana", "edad": 17},
    {"nombre": "Luis", "edad": 20},
    {"nombre": "Carla", "edad": 35},
    {"nombre": "José", "edad": 15},
    {"nombre": "Marta", "edad": 18}
]
function mayoresDeEdad(empleados){
    let cmay=0,cmen=0,acumay=0,acumen=0;
    for(let i=0;i<empleados.length;i++){
        let emp=empleados[i];
        if(emp.edad>=18){
            cmay++;
            acumay=acumay+emp.edad;
        } else{
            cmen++;
            acumen=acumen+emp.edad;
        }   
    }
    let prommay=acumay/cmay;
    let prommen=acumen/cmen;
    console.log("Cantidad de mayores de edad:",cmay,"Promedio de edad:",prommay.toFixed(2));
    console.log("Cantidad de menores de edad:",cmen,"Promedio de edad:",prommen.toFixed(2));
}
    */