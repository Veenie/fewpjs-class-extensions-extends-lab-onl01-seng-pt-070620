// Your code here

class Polygon {
  constructor(array){
    this.sides = array
    this.count = this.sides.length
  }
  get countSides() {
    return this.count
  }
  get perimeter(){
    if ( !Array.isArray( this.sides ) ) return;
    let sum = 0;
    for ( var int of this.sides ) {
      sum += int
    }
    return sum
  }
}


