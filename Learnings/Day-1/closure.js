function account(){
    let amount=0;

    return {
        deposit(deposit_amount){
            amount+=deposit_amount
        }
        ,
        withdraw(withdraw_amount){
            if(withdraw_amount > amount){
                console.log("Insufficient balance");
            }
            else{
                amount-=withdraw_amount
            }
        },
        check_balance(){
            console.log(amount);
        }
    }
}
