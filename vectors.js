function Vec(x,y) {
    this.x = x 
    this.y = y
  }
  
  let vectorPrototype = {
    constructor: Vec,

    get	longitud() {
      return Math.sqrt( Math.pow(this.x,2) + Math.pow(this.y,2)) 
    },
    mas: function (vector) { return new Vec(vector.x + this.x, vector.y + this.y) },
    menos: function (vector) { return new Vec(vector.x - this.x, vector.y - this.y) }
  }
  
  Vec.prototype = vectorPrototype
  
  let v1 = new Vec(3,4)
  let v2 = new Vec(1,2)
  
  let v3 = v1.mas(v2)	
  
  v2.longitud