var assert = require('assert')


class FlowerShop {



}





describe('Flower Shop', function() {
  describe('#calculateRoseBundle', function() {
    it('should return a number of bundles to satisfy the customers order', function() {
      flowerShop = new FlowerShop()
      assert.equal(flowerShop.calculateRoseBundle(10), { bundleSize: 10, quantity: 1 })
    })
  })
})