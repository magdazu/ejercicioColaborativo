
/*Ejercicio
vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mosatrar si la nota está por sobre o por debajo del promedio del curso

*/

/*
¿Qué es lo que tenemos que hacer?
1.- definir array
2.- pedir la cantidad de alumnos
3.- solicitar las notas de cada alumnos y guardarlas en un array
4.- saber cual es la nota aprobatoria
5.- validar la cantidad de notas sea la correcta (limites de notas) y definir notas válidas
6.- hacer una funcion por cada opcion del menú 
7.- crear el menú 
8.- definir cuando termina el menú 
9.- definir el promedio del curso
*/

const notas = [];
const notaAprobatoria = 4.0;

let cantAlumnos = parseInt(prompt("Ingrese numero de alumnos:"));


// se pide una nota por cada alumno
for (let i = 1; i <= cantAlumnos; i++) {
  //variable donde se guardaran las notas
  let notaAlumno = 0;
  //se usa cuando ingresan un numero que no correspondeo con el rango
  do {
    notaAlumno = parseFloat(prompt("Ingrese nota de alumno " + i + ": "));
  } while (notaAlumno > 7 || notaAlumno < 1);

  notas.push(notaAlumno);
}

function promedioNotas(arregloNotas) {
  let suma = 0;
  for (let i = 0; i < arregloNotas.length; i++) {
    suma += arregloNotas[i];
  }
  //para comparar los valores se debe retornar
  return suma / arregloNotas.length;
}

function aprobado(notaAprobatoria, arregloNotas) {
  for (let i = 0; i < arregloNotas.length; i++) {
    if (arregloNotas[i] >= notaAprobatoria) {
      console.log("La nota del alumno " + (i + 1) + " fue de :" + arregloNotas + ", por lo que aprueba");
    } else {
      console.log("La nota del alumno " + (i + 1) + " fue de :" + arregloNotas + ", por lo que reprueba");
    }
  }
}
function sobrePromedio(arregloNotas, promedioNotas) {
  for (let i = 0; i < arregloNotas.length; i++) {
    if (arregloNotas[i] > promedioNotas) {
      console.log("La nota del alumno " + (i + 1) + " fue de :" + arregloNotas + ", lo cual esta sobre el promedio que de " + promedioNotas);
    } else if (arregloNotas[i] == promedioNotas) {
      console.log("La nota del alumno " + (i + 1) + " fue de :" + arregloNotas + ", lo cual es igual al promedio que fue de" + promedioNotas);
    } else {
      console.log("La nota del alumno " + (i + 1) + " fue de :" + arregloNotas + ", lo cual esta por debajo del promedio que fue de" + promedioNotas);
    }
  }
}
console.log("********Comienzo de menu ***********");

let opcion = 1;
while (opcion != 0) {
  do {
    console.log("Bienvenido/a");
    console.log("seleccione la opcion 1 si quiere obtener el promedio");
    console.log("seleccione la opcion 2 si quiere saber si la nota fue aprobatoria o reaprobatoria");
    console.log("seleccione la opcion 3 si quiere ver si la nota esta por sobre o debajo del promedio");
    console.log("Seleccionar 0 para salir");

    opcion = parseInt(prompt("Ingrese opcion: "));
  } while (opcion < 0 || opcion > 3);
  if (opcion == 1) {
    console.log("el promedio de las notas es: " + promedioNotas(notas));
  } else if (opcion == 2) {
    aprobado(notaAprobatoria, notas);
  } else if (opcion == 3) {
    let promedio = promedioNotas(notas);
    sobrePromedio(notas, promedio);
  } else {
    console.log("Hasta luego ");
  }
}

