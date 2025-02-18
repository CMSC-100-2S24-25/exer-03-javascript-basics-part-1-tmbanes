function validatePassword(firstPass, secondPass){
    var lowercaseCount;
    var uppercaseCount;
    var numberCount;
    if(firstPass === secondPass){
        if(firstPass.length >= 8){
            console.log("checking");
            for(var i = 0; i < firstPass.length; i++){
                if(firstPass.charCodeAt(i) >= 48 && firstPass.charCodeAt(i) <= 57){
                    console.log("number detected");
                    numberCount++;
                    continue;
                }
                if(firstPass.charCodeAt(i) >= 65 && firstPass.charCodeAt(i) <= 90){
                    console.log("Uppercase detected");
                    uppercaseCount++;
                    continue;
                }if(firstPass.charCodeAt(i) >= 97 && firstPass.charCodeAt(i) <= 122){
                    console.log("lower detected");
                    uppercaseCount++;
                    continue;
                }
            }
            if(lowercaseCount >= 1 && uppercaseCount >= 1 && numberCount >= 1){
                console.log("validated");
                return true;
            }
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
        name: name,
        newPassword: ""
    }

    if(validatePassword(firstPass, secondPass) === true){
        user.newPassword = reverseString(secondPass);
    }else{
        user.newPassword = firstPass;
    }

    return user;
}

console.log(storePassword("John", "Password1234", "Password1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));




