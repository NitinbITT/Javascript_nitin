const my_account=account();
my_account.deposit(1000);
my_account.check_balance();
my_account.withdraw(200)
my_account.check_balance();


function calculate(a){
    return function(b){
        return function(operation){
            if(operation==="add") return a+b;
            if(operation==="subtract") return a-b;
            if(operation==="multiply") return a*b;
            if(operation==="division") return a/b;
        }
    }
}

console.log(calculate(2)(3)("add"));
console.log(calculate(2)(3)("subtract"));
console.log(calculate(2)(3)("multiply"));
console.log(calculate(2)(3)("division"));
