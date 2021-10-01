const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000,500,100,20,10,5,1]


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount !==""){
     if( Number(billAmount.value>0) ){
            if ( (Number(cashGiven.value)) >= (Number (billAmount.value)) ) {
                
                const amountToReturn = cashGiven.value - billAmount.value;
                calculateChange(amountToReturn)
            }
            else {
                showMessage("The cash provided should be Equal or More than the Bill Amount")
            }
            
    }
    else {
        showMessage("Please Enter Values 👆");
    }
}

})

function calculateChange(amountToReturn){
    for(let i = 0; i<availableNotes.length ; i++){
        const numberOfNotes =  Math.trunc( 
            amountToReturn / availableNotes[i]
        );
    
    amountToReturn = amountToReturn%availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;
}