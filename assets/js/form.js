function validation() {
    
const email = document.registration.Email.value
const firstName = document.registration.First_Name.value
const lastName = document.registration.Last_Name.value
const gender = document.registration.gender.value
const Country = document.registration.country.value



if (email.endsWith('@dci-student.org') == false){
    alert ('Email should end with @dci-student.org')
return false}

if (firstName.length < 8){
    alert ('First Name should be at least 8 characters long');
    return false
}

if (lastName.length == 0 ){
    alert('Last Name must be provided');
}


if (Country == 'usa' && gender !='female') {
    alert('We only register females in USA')
    return false 
}
}

