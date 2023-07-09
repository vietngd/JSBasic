/**
 * Kiểu dữ liệu trong JavaScript
 1. Dữ liệu nguyên thuỷ - Primitive Data
 -Number
 -String
 -Boolean
 -Underfined
 -Null
 -Symbol
 2. Dữ liệu phức tạp - Complex Data
 -Funcion
 - Object
 */
// Number type
var a = 1;
var b = 2;
var c = 1.5;
// String type
var fullName = "Viet Nguyen Duc";
console.log(fullName);
// Boolean type
var isSuccess = true;
// Underfined type : khai bao bien nhung khong gan gia tri
var age;
// Null type
var inNull = null; // null: khong co gi
// Symbol type
var id = symbol("id"); // unique

// Funcion
var myFunction = funcion(){
    alert('Hi, Xin chao cac ban');
}
myFunction();