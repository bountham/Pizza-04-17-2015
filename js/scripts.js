 var Pizza = {
    pizzaType: [],
    pizzaCost: 20,
    Cheese: function() {
        if (this.pizzaType.indexOf("cheese") !== -1 ) {
        return true;
        } else {
        return false;
        }
      },

    pizzaTotal: function() {
        if (this.pizzaSize === 10) {
        this.pizzaCost += 5;
      }
       else if (this.pizzaSize === 12) {
        this.pizzaCost += 7;
      }
        return this.pizzaCost;
      }
    };


$(function(){
    $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputtedSize = parseInt($("input[name=pizza-size]:checked").val());
    var inputtedPizzaType = $("input[name=pizzaType]:checked").val();
    var newPizzaOrder = Object.create(Pizza);

    newPizzaOrder.pizzaSize = inputtedSize;
    newPizzaOrder.pizzaType.push(inputtedPizzaType);

    $(".total-cost").text(newPizzaOrder.pizzaTotal());

    $("#show-price").show();

});
});
