const section_sewage = document.payments.sewage_weekily;

const section_garbage = document.payments.garbage_weekily;

const display = document.getElementById('error-message')

let validation = () => {     
    
     if (section_sewage.value == "") {
         display.style.color = 'red'
         display.innerHTML = 'Please fill all the inputs'
         section_sewage.style.border = '1px solid red'
         
         section_sewage.focus();
         
         return false;
     }
     if (section_garbage.value == "") {
         display.style.color = 'red'
         display.innerHTML = 'Please fill all the inputs'
         
         section_garbage.style.border = '1px solid red'
         section_garbage.focus();
         
         return false;
     }    
     
 }


// document.getElementById("btn_submit").addEventListener("click", validation());
