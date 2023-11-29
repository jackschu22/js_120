// Oh no, the `map` method for arrays has been disabled. Can you fix it?
// Call the new method `myMap`.

Array.prototype.myMap = function(cbfn) {
  let returnArr = [];
  
  for (let idx = 0; idx < this.length; idx++) {
    returnArr.push(cbfn(this[idx]));
  }
  
  return returnArr;
}

console.log([1,2,3].myMap(x => x ** 2));				// [1, 4, 9]
console.log([1,2,3].myMap(x => 2 * x));				    // [2, 4, 6]
console.log([1,2,3].myMap(x => x.toString()));		    // ['1', '2', '3']
console.log(['1', '2', '3'].myMap(x => parseInt(x)));   // [1, 2, 3]