const section_sewage = document.payments.sewage_weekily;
const discount_sewage = document.payments.discount_sewage;
const discount_garbage = document.payments.discount_garbage;
const section_garbage = document.payments.garbage_weekily;

const display = document.getElementById('error-message');
const error_sewageFee = document.getElementById('error-sewageFee');
const error_garbageFee = document.getElementById('error-garbage');
const error_sewageDiscount = document.getElementById('error-sewageDiscount');
const error_garbageDiscount = document.getElementById('error-garbageDiscount');

let validations = () => {     
    
     if (section_sewage.value == "") {
         error_sewageFee.style.color = 'red'
         error_sewageFee.innerHTML = 'Please fill fee for sewage'
         section_sewage.style.border = '1px solid red'
         
         section_sewage.focus();
         
         return false;
     }
     if (section_garbage.value == "") {
         error_garbageFee.style.color = 'red'
         error_garbageFee.innerHTML = 'Please fill fee for garbage'
         
         section_garbage.style.border = '1px solid red'
         section_garbage.focus();
         
         return false;
    }
    if (discount_garbage.value == "") {
         error_garbageDiscount.style.color = 'red'
         error_garbageDiscount.innerHTML = 'Please fill provide discount on garbage'
         
         discount_garbage.style.border = '1px solid red'
         discount_garbage.focus();
         
         return false;
    }
    if (discount_sewage.value == "") {
         error_sewageDiscount.style.color = 'red'
         error_sewageDiscount.innerHTML = 'Please fill provide discount on sewage'
         
         discount_sewage.style.border = '1px solid red'
         discount_sewage.focus();
         
         return false;
     }  
     
 }


// document.getElementById("btn_submit").addEventListener("click", validation());
