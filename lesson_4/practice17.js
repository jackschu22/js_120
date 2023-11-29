function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

function createDiscountedCar(make, fuelLevel, engineOn, startingPrice, discount) {
  let pricingInfo = {
    startingPrice: startingPrice,
    discount: discount,
    finalPrice: startingPrice * (1 - discount / 100),
  }
  return Object.assign(createCar(make, fuelLevel, engineOn), pricingInfo);
}

let jaguar = createDiscountedCar('Jaguar', 0.4, false, 20000, 10);
console.log(jaguar.finalPrice)

