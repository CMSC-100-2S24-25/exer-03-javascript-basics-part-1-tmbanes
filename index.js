function validatePassword(firstPass, secondPass){
    if(firstPass === secondPass){
        if(firstPass.length === 8){
            return true;
        }
    }
    return false;
}

var reversedString ="";

function reverseString(password){
    for(var i = password.length - 1; i >= 0; i--){
        if(password[i] !== undefined){
            reversedString = reversedString + password[i];
        console.log(password[i]);
        } 
    }
    console.log(reversedString);
}

reverseString("12345678");