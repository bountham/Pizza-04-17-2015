describe("BankAccount", function(){
      describe("withdraw", function() {
    it("subtracts the amount from the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.withdraw(10);
      expect(testBankAccount.balance).to.equal(-10);
    });
  });

});
