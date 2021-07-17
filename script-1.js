"use strict"
// Вариант 1
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
var arrUnique = arr.filter(onlyUnique);
console.log(arrUnique);
    
// Вариант 2
  
let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let arr2 = [];
arr2 = arr.reduce(function unique(a, b) {

   if (!arr2.includes(b)) {
      arr2.push(b);
   }
   
   return arr2;
}, []);

console.log(arr2);