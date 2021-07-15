"use strict"

function factorial(m) {
    return (m != 1) ? m * factorial(m - 1) : 1;
  }
  
  console.log(factorial(10));