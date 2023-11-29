// JS120 Small Problems: Objects Problem 3:

// Write a function objectsEqual that accepts two object arguments and returns true or 
// false depending on whether the objects have the same key/value pairs.

function objectsEqual(obj1, obj2) {
	return Object.values(obj1).sort().join('') === Object.values(obj2).sort().join('') &&
	Object.keys(obj1).sort().join('') === Object.keys(obj2).sort().join('');
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false