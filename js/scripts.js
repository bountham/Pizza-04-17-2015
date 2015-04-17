 var Pizza = {
    pizzaType: [],
    startCost: 10,
    Pepperoni: function() {
        if (this.pizzaType.indexOf("pepperoni") !== -1 ) {
        return true;
        } else {
        return false;
        }
    // },
    // sliceNumber: function() {
    //     if (this.pizzaSize === 24) {
    //     return 24;
    //     } else if (this.hasPepperoni()) {
    //     return 12;
    //     } else if ((this.pizzaSize === 16) || (this.pizzaSize === 18)) {
    //     return 24;
    //     } else {
    //     return 8;
    //     }
    // },
    // costTotal: function() {
    //     if (this.pizzaSize === 16) {
    //     this.startCost += 7;
    //     } else if (this.pizzaSize === 18) {
    //     this.startCost += 10;
    //     } else if (this.pizzaSize === 24) {
    //     this.startCost += 12;
    //     }
    //     return this.startCost;
    // },
    // costPerSlice: function() {
    //     return Math.round(((this.pizzaSize /10.0) + (this.costTotal() / this.sliceNumber() * 1.0)));
    //     }
};
