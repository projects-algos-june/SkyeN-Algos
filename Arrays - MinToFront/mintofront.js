//Min to Front
//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    var ind = 0;
    var min = arr[0];
    for (var i=0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            ind = i;
        }
    }
    if (ind == 0){
        console.log(arr);
        return arr;
    }
    else{
        for (var j=ind; j>0; j--){
            arr[j] = arr[j-1];
        }
        arr[0] = min;
        console.log(arr);
        return arr;
    }
}