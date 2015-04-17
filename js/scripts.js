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


$(function(){
    $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputtedSize = parseInt($("input[name=pizza-size]:checked").val());
    var inputtedPizzaType = $("input[name=pizzaType]:checked").val();
    alert(inputtedSize);
    var newPizzaOrder = Object.create(Pizza);

    newPizzaOrder.pizzaSize = inputtedSize;
    newPizzaOrder.pizzaType.push(inputtedPizzaType);

    $(".total-cost").text(newPizzaOrder.pizzaTotal());

    $("#show-price").show();

});
});
