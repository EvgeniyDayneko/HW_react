"use strict"
function User (first_name, second_name, age, city) {
    this.firstName = first_name;
    this.secondName = second_name;
    this.age = age;
    this.city = city;
};

let a = new User("Nikolay", "Ivanov", 25, "Moscow");
console.log(a);

let b = new User("Alexandr", "Petrov", 18, "Saint-Petersburg");
console.log(b);

User.prototype.result = function () {
    console.log(this.firstName, this.secondName, this.age, this.city);
};
a.info = result;
a.info();

b.info = result;
b.info();

