//Remove Blanks

function removeBlanks(str){
    for (var i=0; i<str.length; i++){
        if (str[i] === " "){
            str = str.slice(0, i) + str.slice(i+1);
        }
    }
    //console.log(str);
    return str;
}

//Get Digits

function getDigits(str2){
    var newstr = "";
    for (var j=0; j<str2.length; j++){
        if (Number.isInteger(parseInt(str2[j]))){
            newstr = newstr + str2[j];
        }
    }
    int = parseInt(newstr)
    //console.log(int);
    return int;
}

//Acronyms

function acronyms(str4){
    var newstr1 = "";
    str4 = str4.toUpperCase();
    if (str4[0] != " "){
        newstr1 = str4[0];
    }
    for (var i=0; i<str4.length-1; i++){
        if (str4[i] === " "){
            newstr1 = newstr1 + str4[i+1];
        }
    }
    //console.log(newstr1);
    return newstr1;
}

//Count Non-Spaces

function countNonSpaces(str5){
    var count = 0;
    for (var i=0; i<str5.length; i++){
        if (str5[i] === " "){
        }
        else{
            count++;
        }
    }
    console.log(count);
    return count;
}

//Remove Shorter Strings

function removeShorts(arr, len){
    newarray1 = [];
    for (l=0; l<arr.length; l++){
        if (typeof arr[l] === 'string'){
            if (arr[l].length >= len){
                newarray1.push(arr[l]);
            }
        }
        else{
            console.log("This function must be performed on an array of strings.")
            return;
        }
    }
    //console.log(newarray1);
    return newarray1;
}