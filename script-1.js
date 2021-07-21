"use strict"

let user = { 
    name: "Stepan", 
    years: 19, 
    car: "Subaru", 
    telePhone: "iPhone", 
    city: "Minsk" 
};
let {name: userName, years: userYears, car: userCar, ...userOtherInfo} = user;

console.log(userName);
console.log(userYears);
console.log(userCar);
console.log(userOtherInfo);