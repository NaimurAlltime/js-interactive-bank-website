// step-1: add event listener to the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the deposit amount from the withdraw input field  
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    // validation input field 
    // if(isNaN(newWithdrawAmount)){
    //     alert("Please Input a Integer Number");
    // }
    
    // step-3: get the current withdraw total
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousTotalWithdrawString = totalWithdrawElement.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

    // step-5: get previous balance 
    const totalBalanceElement = document.getElementById('total-balance');
    const perviousTotalBalanceString = totalBalanceElement.innerText;
    const perviousTotalBalance = parseFloat(perviousTotalBalanceString);

    //step-7: clear withdraw field 
    withdrawField.value = '';

    // validation 
    if(newWithdrawAmount > perviousTotalBalance){
        alert("You don't have enough money in your account!!!");
        return;
    }

     // step-4: withdraw total calculate 
    const currentWithdraw = previousTotalWithdraw + newWithdrawAmount;

    // set the withdraw total 
    totalWithdrawElement.innerText = currentWithdraw;

    // step-6: set the current total balance calculate
    const currentBalance = perviousTotalBalance - newWithdrawAmount;
    
    // update the total balance 
     totalBalanceElement.innerText = currentBalance;
})