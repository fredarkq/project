'use strict';

class Rectangle {
      constructor(height,width) {
        this.height = height;
        this.width = width;
      }

      calcArea(){
        return this.height * this.width;
      }
}

class ColorRedRecatangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showshowMyProps() {
        console.log(`text: ${this.text} color: ${this.bgColor}`);
    }
}

const div = new ColorRedRecatangleWithText(35, 10, 'Hello World', 'red');

div.showshowMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10),
//       long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
