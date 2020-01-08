const rectModule = (function() {
    let _width = 20;
    let height = 30;
   
    function setHeight(val) {
      height = val;
    }
   
    function getArea() {
      return _width * height;
    }
      
    return {
      height,
      setHeight,
      getArea,
    };
  })();
  
   
  console.clear();
  console.log(rectModule.getArea()); // 600
  console.log(rectModule.width); // undefined
  console.log(rectModule.height); // 30
  rectModule.setHeight(10);
  console.log(rectModule.getArea()); // 200
  
  // -----------------------------------------------------------------------------
  
  function Rect(width, height) {
      this._width = width;
      this._height = height;
      this.height = this._height;
  }
  
  Rect.prototype.setHeight = function(h) {
      this._height = h;
      this.height = this._height;
      return this;
  }
  
  Rect.prototype.getArea = function() {
      return this._width * this._height;
  }
  
  const rect = new Rect(20, 30);
  
  console.log('------------------');
  console.log(rect.getArea()); // 600
  console.log(rect.width); // undefined
  console.log(rect.height); // 30
  rect.setHeight(10);
  console.log(rect.getArea()); // 200
  
  // -----------------------------------------------------------------------------
  
  
  class Rectangle {
      constructor(w, h) {
          this._width = w;
          this._height = h;
          this.height = this._height;
      }
  
      setHeight(h) {
          this._height = h;
          this.height = this._height;
          return this;
      }
  
      getArea() {
          return this._width * this._height;
      }
  }
  
  const rectFromClass = new Rectangle(20, 30);
  
  console.log('------------------');
  console.log(rectFromClass.getArea()); // 600
  console.log(rectFromClass.width); // undefined
  console.log(rectFromClass.height); // 30
  rectFromClass.setHeight(10).setHeight(200).setHeight(10);
  console.log(rectFromClass.getArea()); // 200