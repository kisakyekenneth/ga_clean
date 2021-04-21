const truckReg_no = document.truckForm.truckRegNo;
const truckCode = document.truckForm.truckCode;
const truck_location = document.truckForm.clocation;
const destination = document.truckForm.destination;
const service_type = document.truckForm.service_type;
const driverName = document.truckForm.driverName;
const error_msg = document.getElementById('error-message');

let truck_validations = () => {
    
    if (truckReg_no.value == "") {
        error_msg.style.color = 'red'
        error_msg.innerHTML = 'Please fill fee for sewage'
        truckReg_no.style.border = '1px solid red'
         
        truckReg_no.focus();
         
        return false;
    }
    if (driverName.value == "") {
        error_msg.style.color = 'red'
        error_msg.innerHTML = 'Please select driver from the list'
        driverName.style.border = '1px solid red'
         
        driverName.focus();
         
        return false;
    }
}