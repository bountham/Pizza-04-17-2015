describe("BankAccount", function(){
      describe("withdraw", function() {
    it("subtracts the amount from the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.withdraw(10);
      expect(testBankAccount.balance).to.equal(-10);
    });
  });

  describe("deposit",function(){
    it("adds a starting balance to account",function(){
       var testBankAccount = Object.create(BankAccount);
       testBankAccount.deposit(50);
       expect(testBankAccount.balance).to.equal(50);
    });

  });


});

describe("Person", function(){
  describe("addname()", function() {
    it("add a account holder name", function() {
      var testpersonName = Object.create(Person);
      testpersonName.addname();
      expect(testpersonName.addname()).to.equal(testpersonName.name);
    });
  });
});
