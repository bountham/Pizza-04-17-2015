 var Pizza = {
    pizzaType: [],
    pizzCost: 10,
    Cheese: function() {
        if (this.pizzaType.indexOf("cheese") !== -1 ) {
        return true;
        } else {
        return false;
        }
      },

    pizzaTotal: function() {
        if (this.pizzaSize === 10) {
        this.pizzCost += 5;
      } else if (this.pizzaSize === 12) {
        this.pizzCost += 7;
        }
        return this.pizzCost;
    }
  };
