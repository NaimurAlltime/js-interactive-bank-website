// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field 
    // for input field use .value to the the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);

    // step-3: get the current deposit total 
    // for non-this.inputMode(element other than input textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseInt(previousDepositTotalString);

    // step-4: add numbers to set the total deposit 
    const currentAmount = previousDepositTotal + newDepositAmount;

    // set the deposit total 
    depositTotalElement.innerText = currentAmount;

    // step-5: set balance current total 
    const totalBalanceElement = document.getElementById('total-balance');
    const perviousTotalBalanceString = totalBalanceElement.innerText;
    const perviousTotalBalance = parseFloat(perviousTotalBalanceString);

    // add numbers to set the total balance
    const currentBalance =  perviousTotalBalance + newDepositAmount;

    // step-6: calculate current total balance 
    totalBalanceElement.innerText = currentBalance;


    // step-7: clear deposit field 
    depositField.value = '';
})