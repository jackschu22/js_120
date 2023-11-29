let obj = {
  0: 1, 
  1: 2, 
  2: 3,
  7: 7,
  8: 8,
}


console.log(obj)

console.log(Array.from(Object.assign(obj, {length: 9})));
// [ 1, 2, 3 ]

// console.log(Array.from(Object.assign(obj, {length: 2})));
// [ 1, 2 ]

// console.log(Array.from(Object.assign(obj, {length: 5})));
// [ 1, 2, 3, undefined, undefined ]


console.log(obj)

// let str = 'launch school'
// let strArr = Array.from(str);
// strArr.length = 2;
// console.log(strArr)