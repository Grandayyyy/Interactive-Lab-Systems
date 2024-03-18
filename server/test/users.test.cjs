let chai = require('chai');

chai.should();

// Import the Rectangle class.
let Rectangle = require("./testApp.cjs");

describe('Rectangle', () => {
  describe('#width', () => {
    let rectangle;

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      rectangle = new Rectangle(10, 20);
    });

    it('returns the width', () => {
      // This will fail if "rectangle.width" does
      // not equal 10.
      rectangle.width.should.equal(10);
    });

    it('can be changed', () => {
      // Assert that the width can be changed.
      rectangle.width = 30;
      rectangle.width.should.equal(30);
    });

  });

  describe('#height', () => {
    let rectangle;

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      rectangle = new Rectangle(10, 20);
    });

    it('returns the height', () => {
      // This will fail if "rectangle.width" does
      // not equal 10.
      rectangle.height.should.equal(20);
    });

    it('can be changed', () => {
      // Assert that the width can be changed.
      rectangle.height = 30;
      rectangle.height.should.equal(30);
    });

  });

});