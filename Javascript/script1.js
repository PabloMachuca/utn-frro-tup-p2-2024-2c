/* Ejercicios 1 al 5
alert("Hello World")
document.write("Hello World<br/>")
document.write("El resultado de sumar 3 + 5 es igual a: ", 3+5)
var nombre = prompt ("Ingrese nombre de usuario: ", "")
document.write("<br/>Hola " + nombre)
var num1 = Number(prompt ("Ingrese un numero: ", ""))
var num2 = Number(prompt ("Ingrese un segundo numero: ", ""))
document.write("<br/>El resultado de los dos numeros ingresados ante es: ", num1 + num2)*/

var num1 = Number(prompt ("Ingrese un numero: ", ""))
var num2 = Number(prompt ("Ingrese un segundo numero: ", ""))
if (num1>num2) {document.write("El numero más grande es el: ", num1)} else {document.write("El numero más grande es el: ", num2)}

