function validatePassword(firstPass, secondPass){
    var lowercaseCount = 0;
    var uppercaseCount = 0;
    var numberCount = 0;
    if(firstPass === secondPass){
        if(firstPass.length >= 8){
            for(var i = 0; i < firstPass.length; i++){
                if(lowercaseCount >= 1 && uppercaseCount >= 1 && numberCount >= 1){
                    return true;
                } // checks if password already has met the conditions


                // Used ASCII code to check characters inside the string
                if(firstPass.charCodeAt(i) >= 48 && firstPass.charCodeAt(i) <= 57){
                    ++numberCount;
                    continue;
                }
                if(firstPass.charCodeAt(i) >= 65 && firstPass.charCodeAt(i) <= 90){
                    uppercaseCount++;
                    continue;
                }
                if(firstPass.charCodeAt(i) >= 97 && firstPass.charCodeAt(i) <= 122){
                    lowercaseCount++;
                    continue;
                }
            }
        }
    }
    else{
        return false;
    }
}


function reverseString(password){
    var reversedString = "";

    //Start from the end of password string then adds it in a new string
    for(var i = password.length - 1; i >= 0; i--){
        if(password[i] !== undefined){
            reversedString += password[i];
        } 
    }
    return reversedString;
}


function storePassword(name, firstPass, secondPass){
    const user = {
        name: name,
        newPassword: ""
    } // user object

    if(validatePassword(firstPass, secondPass) === true){
        user.newPassword = reverseString(secondPass);
    }else{
        user.newPassword = firstPass;
    }
    return user;
}

// Input and Output
console.log(storePassword("John", "Password1234", "Password1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));




