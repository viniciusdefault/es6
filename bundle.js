"use strict";

// |------------------------------classes-------------------------------------|
// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data)
//     }
// }
// class TodoList extends List {
//     constructor() {
//         super();
//         this.usuario = "ronaldinho";
//     }
//     MostraUsuario() {
//         console.log(this.usuario)
//     }    
// }
// const minhaLista = new TodoList();
// document.querySelector(".newtodo").onclick = function () {
//     minhaLista.add("novo todo");
// }
// minhaLista.MostraUsuario();
// |------------------------------classes estaticas---------------------------|
// class Matematica {
//     static soma (a, b) {
//         return a  + b ;
//     }
// }
// console.log( Matematica.soma( 1, 2 ));
// |------------------------------operações em vetores com js es6+-------------------------------|
// let arr = [1, 2, 3, 4, 5, 6]
// const newArr = arr.map(function(item, index) {
//     return item + index ;
// })
// console.log(newArr)
// const  sum = arr.reduce(function(total, next) {
//     return total + next;
// })
// |---------------------iteraçoes do reduce-------------------------|
//0
//1
//1
//2
//3
//3
//6
//4
//10
//5
//15
//6
//21
// 1° - total 0   next 1   
// 2° - total 1   next 2 
// 3° - total 3   next 3 
// 4° - total 6   next 4
// 5° - total 10  next 5
// 6° - total 15  next 6
// console.log(sum)
// const filter = arr.filter(function(item) {
//     return item % 2 === 0; 
// })
// console.log(filter)
// const find = arr.find(function(item) {
//     return item === 4; 
// })
// console.log(find)
// |-------------------------------------Arrow functions------------------------------------------|
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
