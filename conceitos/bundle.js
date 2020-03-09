"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = arr.map(item => item * 2)
// console.log(newArr)
// |-------------------------------------Desestruturação------------------------------------------|
// const usuario = {
//     nome: "Vinicius",
//     idade: 20,
//     endereço: {
//         cidade: "Bragança Paulista",
//         estado: "SP"
//     },
// };
// const  {nome, idade, endereço: { cidade }} = usuario;
// function MostraNome ({ nome, idade }) {
//     console.log(idade, nome)
// }
// MostraNome(usuario)
// console.log(usuario);
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// |-------------------------------------Rest/Spread------------------------------------------|
//REST
// const usuario = {
//     nome: "Vinicius",
//     idade: 20,
//     endereço: {
//         cidade: "Bragança Paulista",
//         estado: "SP"
//     },
// };
// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);
// //REST  em vetores
// const Arr = [1, 2, 3, 4, 5, 6];
// const [a, b, ...c] = Arr ;
// console.log(a)
// console.log(b)
// console.log(c)
// //REST  para parametros de função
// function soma (...params) {
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma( 1, 2, 3, 4, 5));
//SPREAD
//armazenar 2 arrays em somente 1 
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3)
//mudar uma informação do array
var usuario = {
  nome: "Vinicius",
  idade: 20,
  empresa: "RocketSeat"
};

var usuario1 = _objectSpread({}, usuario, {
  nome: "Gabriel"
});

console.log(usuario1);
