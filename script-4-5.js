"use strict"

function HauseBuilder(width, height, floor) {
    this.width = width;
    this.height = height;
    this.floor = floor;
};

let firstHouse = new HauseBuilder(300, 15, 5);
console.log(firstHouse);

let secondHouse = new HauseBuilder(400, 30, 10);
console.log(secondHouse);

HauseBuilder.prototype.calcArea = function () {
    console.log(this.width* this.height*this.floor);
};
firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();

