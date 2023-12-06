var userErrorField = document.getElementById("userField");
var passwordErrorField= document.getElementById("passwordField");

var userEditText = document.getElementById("userId");
var passwordEditText = document.getElementById("passId");

var userValid = false;
var passworfValid = false;


var message = [];
message.push("El campo no puede estar vacio");
message.push("El campo debe tener más de 3 caracteres");
message.push("Validación correcta");

function validar(){
    passwordErrorField.style.color = 'red';
    userErrorField.style.color = 'red';
   
    if (userEditText.value == "" || userEditText.value == null )
    {
        userErrorField.innerHTML = message[0];
    }
    else if (userEditText.value.length <= 3){
        userErrorField.innerHTML = message[1];
    }
    else{
        userErrorField.innerHTML = message[2];
        userErrorField.style.color = 'green';

    }

    userErrorField.style.display = 'block';
    
    if (passwordEditText.value == ""|| passwordEditText.value == null)
    {
        passwordErrorField.innerHTML = message[0];
    }else if (passwordEditText.value.length <= 3){
        passwordErrorField.innerHTML = message[1];
    }
    else{
        passwordErrorField.innerHTML = message[2];
        passwordErrorField.style.color = 'green';
    }

    passwordErrorField.style.display = 'block'
}