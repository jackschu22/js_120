class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.totalListeners = [];
  }
  
  howMany(listeners) {
    let newListeners = 0;
    for (let listener of listeners) {
      if (!this.totalListeners.includes(listener.toLowerCase())) {
        this.totalListeners.push(listener.toLowerCase());
        newListeners += 1;
      }
    }
    return newListeners;
  }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
console.log(mountMoose.howMany(['John', 'joHN', 'carl'])); //=> 2