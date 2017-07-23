var assert = require("assert")
var FlowerShop = require("../src/FlowerShop")


describe("Flower Shop", function() {
  describe("#calculateRoseBundle", function() {
    it("should return a bundle size and quantity for a given total quantity", function() {
      flowerShop = new FlowerShop()
      assert.equal(flowerShop.calculateRoseBundle(10), { bundleSize: 10, quantity: 1 })
    })
  })
})