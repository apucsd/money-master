

document.getElementById('save').addEventListener('click',function(){
    console.log('click')
    const saveRatio = getInputValue('save-balance');
    const balance = getInnerTextValue('balance');
    const saveBalance = (balance * saveRatio) / 100;
    const remainingBalance = balance - saveBalance;

    if(saveBalance =='' ){
        alert('কিছু লিখতে ভুলে গেছেন?')
    }
    if(saveBalance>balance){
        alert('ভাই তোর এত টাকা নাই...')
    }
   else{
    setInnerText('saving-amount',saveBalance);
    setInnerText('remaining-balance',remainingBalance);
   }
})