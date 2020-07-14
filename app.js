const amonut=document.getElementById('amount');
const Service=document.getElementById('Service');
const pShare=document.getElementById('pShare');
const btnClick=document.getElementById('find');
const btnClose=document.getElementById('btnClose');

//add addEventListener
amonut.addEventListener('blur',chk_amount);
pShare.addEventListener('blur',chk_psharBill);
btnClick.addEventListener('click',cal);
btnClose.addEventListener('click',closeAlert);

//check Amount
function chk_amount(){
    if(amonut.value < 0){ alert('Invalid Amount ');
    amonut.value = '' }
}

//check People share Bill
function chk_psharBill(){
    if(pShare.value < 0){ alert('Invalid people Share Bill');
    pShare.value = '' }
    if(isNaN(pShare.value)){alert ('Only Number Allow')
    pShare.value = '' }
}

//calculation
function cal(){
    if(amonut.value !== '' && Service.value !== '' && pShare.value !== ''){
        const total=amonut.value*Service.value/pShare.value;
        document.getElementById('divAlert').style.visibility='visible';
        document.getElementById('display').innerHTML='Tip Amount is : '+total;
    }
    else{
        alert('Fill All Input')
    }
}

//close Alert
function closeAlert(){
    document.getElementById('divAlert').style.visibility='hidden';
}