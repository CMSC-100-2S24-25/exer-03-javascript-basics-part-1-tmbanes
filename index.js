function validatePassword(firstPass, secondPass){
    if(firstPass === secondPass){
        if(firstPass.length >= 8){
            return true;
        }
    }
    else{
        return false;
    }
    
}


function reverseString(password){
    var reversedString = "";

    for(var i = password.length - 1; i >= 0; i--){
        if(password[i] !== undefined){
            reversedString = reversedString + password[i];
        console.log(password[i]);
        } 
    }

    return reversedString;
}


function storePassword(name, firstPass, secondPass){
    const user = {
        userName: name,
        newPassword: ""
    }

    if(validatePassword(firstPass, secondPass) == true){
        user.newPassword = reverseString(secondPass);
        console.log("validated password");
    }else{
        console.log("not validated password");
        user.newPassword = firstPass;
    }

    console.log(user);
}

storePassword("John", "Password1234", "Password1234");
