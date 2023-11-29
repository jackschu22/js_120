// There are all types of cylons. The trick is, some look like humans. Using 
// prototypical inheritance, create a prototype for Cylon. Cylons should have a 
// model, and should have an attack function, which will return the string "Destroy 
// all humans!"

// Since some cylons appear human, then make a child object called HumanSkin. This 
// should have a model, as Cylons do, and should have the same attack. However, it 
// should also have a function called infiltrate, which will return the string 
// "Infiltrate the colonies".

function Cylon(model){
  this.model = model;
}

Cylon.prototype.attack = function() {
  return 'Destroy all humans!';
}

function HumanSkin(model){
  Cylon.call(this, model);
}

HumanSkin.prototype = Object.create(Cylon.prototype);
HumanSkin.prototype.constructor = HumanSkin;

HumanSkin.prototype.infiltrate = function() {
  return 'Infiltrate the colonies'
}

let cylon = new Cylon("raider");
console.log(cylon.attack());
console.log(Object.getPrototypeOf(cylon) === Cylon.prototype);

let caprica = new HumanSkin(6);
console.log(caprica.infiltrate());

console.log(caprica.constructor === HumanSkin);
console.log(Object.getPrototypeOf(caprica) === HumanSkin.prototype);
console.log(Object.getPrototypeOf(HumanSkin.prototype) === Cylon.prototype);

console.log(Object.getPrototypeOf(HumanSkin) === Function.prototype);		// *?*
console.log(Object.getPrototypeOf(Cylon) === Function.prototype);			// *?*