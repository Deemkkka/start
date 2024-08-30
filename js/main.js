$(function(){

});

const fruits = ['apple', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'apple'];

const count = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(count);