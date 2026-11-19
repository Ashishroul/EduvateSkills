// inner function invokes, even after outer function execution finished

function Outer(){

  let balance=10000;

  function checkBalance(){
    console.log("Account Balance:",balance);
  }

  function Withdraw(amount) {
    balance-=amount;
  }
  
  function Deposit(amount) {
    balance+=amount;
  }

  return {checkBalance,Withdraw,Deposit}
}

const OuterCall=Outer();

OuterCall.checkBalance()
OuterCall.Withdraw(500)
OuterCall.checkBalance()
OuterCall.Deposit(2000)
OuterCall.checkBalance()