document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = getInputValue('income');
    const foodExp = getInputValue('food-exp');
    const rentExp = getInputValue('rent-exp');
    const clothExp = getInputValue('cloths-exp');
    //
    const totalExp = parseInt(foodExp) +parseInt( rentExp) + parseInt(clothExp);
    const balance = income - totalExp;
    if(income == '' || foodExp =='' || rentExp =='' || clothExp == ''){
         return alert('কিছু লিখতে ভুলে গেছেন?')
    }
   if(totalExp<income){
    setInnerText('total-exp',totalExp);
   
    setInnerText('balance',balance);
   }
   else{
    alert('মামা আয় বুঝে ব্যায় কর।।')
   }


})

function getInputValue(id){
    return document.getElementById(id).value;
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}
function getInnerTextValue(id){
    return parseFloat(document.getElementById(id).innerHTML);
}