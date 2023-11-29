let Spoonable = {
  scoop() {
    console.log("I scoop food!")
  }
}

class Entree {}

class Forkable extends Entree {
  poke() {
    console.log("I poke food!")
  }
}

class Steak extends Forkable {}

class Chili extends Entree {}
Object.assign(Chili.prototype, Spoonable);

class Lasagna extends Forkable {}

class ShepardsPie extends Entree {}
Object.assign(ShepardsPie.prototype, Spoonable);

class Stew extends Forkable {}
Object.assign(Stew.prototype, Spoonable);

class RiceCakes extends Forkable {}
Object.assign(RiceCakes.prototype, Spoonable);