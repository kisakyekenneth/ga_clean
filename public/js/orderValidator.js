const customerNames = document.customerCalls.customer_name;
const clocation = document.customerCalls.location;
const nin = document.customerCalls.nin;
const tel_no_1 = document.customerCalls.tel_no_1;
const tel_no_2 = document.customerCalls.tel_no_2;
const tel_no_3 = document.customerCalls.tel_no_3;
const no_of_trucks = document.customerCalls.no_of_trucks;
const desired_service = document.customerCalls.desired_service;

const display = document.getElementById('error-message');
const Cname = document.getElementById('error-cName');
const nameRegex = /^[a-zA-Z ]+$/;

let orders_validation = (event) => {     
    
     if (customerNames.value == "") {
          Cname.style.color = 'red';
          Cname.innerHTML = 'Please enter customer Name';
          customerNames.style.border = '1px solid red';
         
         customerNames.focus();
         event.preventDefault();
         
         return false;
     }

     if (customerNames.value.length < 2) {
          Cname.style.color = 'red';
          Cname.innerHTML = 'Name should be more than 2 characters';
          customerNames.style.border = '1px solid red';
         
         customerNames.focus();
         
         return false;
     }
     
     if (!customerNames.value.match(nameRegex)) {
          Cname.style.color = 'red';
          Cname.innerHTML = 'Name should be characters only';
          customerNames.style.border = '1px solid red';
         
         customerNames.focus();
         
         return false;
     }
     if (clocation.value == "") {
          display.style.color = 'red';
          display.innerHTML = 'Please fill all fields';
         
          clocation.style.border = '1px solid red';
         clocation.focus();
         
         return false;
     }
     
    if (nin.value == "") {
         display.style.color = 'red';
         display.innerHTML = 'Please fill all fields';
         
         nin.style.border = '1px solid red';
         nin.focus();
         
         return false;
    }
     
    if (tel_no_1.value == "") {
         display.style.color = 'red';
         display.innerHTML = 'Please fill all fields';
         
         tel_no_1.style.border = '1px solid red';
         tel_no_1.focus();
         
         return false;
    }
    if (tel_no_2.value == "") {
         display.style.color = 'red';
         display.innerHTML = 'Please fill all fields';
         
         tel_no_2.style.border = '1px solid red';
         tel_no_2.focus();
         
         return false;
    }
     
    if (tel_no_3.value == "") {
         display.style.color = 'red';
         display.innerHTML = 'Please fill all fields';
         
         tel_no_3.style.border = '1px solid red';
         tel_no_3.focus();
         
         return false;
    }
     
     if (no_of_trucks.value == "default") {
         display.style.color = 'red'
         display.innerHTML = 'Please select no. of conductors'
         
         no_of_trucks.style.border = '1px solid red'
         no_of_trucks.focus();
         
         return false;
     }

    if (desired_service.value == "default") {
         display.style.color = 'red'
         display.innerHTML = 'Please select desired service'
         
         desired_service.style.border = '1px solid red'
         desired_service.focus();
         
         return false;
    }
    
     
}
 


