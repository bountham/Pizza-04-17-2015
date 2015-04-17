  describe("Pizza", function() {
    describe("cheese", function() {
      it("returns false if pizza has no cheese", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaType = [""];
      expect(testPizza.Cheese()).to.equal(false);
      });
    });

    describe("pizzaTotal", function() {
      it("returns cost for 10 pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaSize = 10;
      expect(testPizza.pizzaTotal()).to.equal(15);
      });
    });

    describe("pizzaTotal", function() {
      it("returns cost for 12 pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaSize = 12;
      expect(testPizza.pizzaTotal()).to.equal(17);
      });
    });
  });
