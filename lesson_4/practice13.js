let pointA = new Point(30, 40); // ReferenceError: Cannot access 'Point' before initialization

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

// rest of the code
}