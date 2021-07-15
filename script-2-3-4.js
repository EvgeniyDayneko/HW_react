"use strict"

let users = [
    {id: 1, name: "Вася", age: 19},
    {id: 2, name: "Петя", age: 18},
    {id: 3, name: "Маша", age: 17},
    {id: 4, name: "Света", age: 18},
    {id: 5, name: "Наташа", age: 17},
    {id: 6, name: "Женя", age: 12},
    {id: 7, name: "Коля", age: 30},
    {id: 8, name: "Настя", age: 16},
    {id: 9, name: "Антон", age: 19},
    {id: 10, name: "Иван", age: 20},
    {id: 11, name: "Павел", age: 16},
    {id: 12, name: "Денис", age: 20}
 ];

 console.log(users);

 let usersAfterYear = [];
 usersAfterYear = users.map(item => {
     item.age = item.age + 1;

     return item;
}).filter(item => item.age >=18);

console.log(usersAfterYear);

let usersAfterYearUniqueAge = [];
usersAfterYear.filter(function (item) {
  let n = usersAfterYearUniqueAge.findIndex(i => (i.age == item.age));
  if (n === -1) {
    usersAfterYearUniqueAge.push(item);
  }
  return null;
});

console.log(usersAfterYearUniqueAge);