//Reverse

function reverse(arr){
    for (var i=0; i<arr.length/2; i++){
        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
    //console.log(arr);
    return arr;
}

//Rotate

function rotate(arr2, shiftBy){
    if (shiftBy > 0){
        while (shiftBy > 0){
            var temp = arr2[arr2.length-1];
            for (var i=arr2.length-1; i>0; i--){
                arr2[i] = arr2[i-1];
            }
            arr2[0] = temp;
            shiftBy--;
        }
        //console.log(arr2);
        return arr2;
    }
    else{
        while (shiftBy < 0){
            var temp = arr2[0];
            for (var i=0; i<arr2.length; i++){
                arr2[i] = arr2[i+1];
            }
            arr2[arr2.length-1] = temp;
            shiftBy++;
        }
        //console.log(arr2);
        return arr2;
    }
}

//Filter Range

function filterRange(arr3, min, max){
    for (var i=arr3.length-1; i>=0; i--){
        if (arr3[i] > max || arr3[i] < min){
            for (var j=i; j<arr3.length-1; j++){
                arr3[j] = arr3[j+1];
            }
            arr3.length--;
        }
    }
    //console.log(arr3);
    return arr3;
}

//Concat

function concatmanual(arr4,arr5){
    newarray = [];
    for (var x=0; x<arr4.length; x++){
        newarray[x] = arr4[x];
    }
    for (var y=0; y<arr5.length;y++)
    {
        newarray[y+arr4.length] = arr5[y];
    }
    //console.log(newarray);
    return newarray;
}