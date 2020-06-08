// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, val){
    array1 = [];
    array1[0] = val;
    for (var i=0; i<arr.length; i++){
        array1[i+1] = arr[i];
    }
    return array1;
}

//Pop Front
//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
    array2 = [];
    val = arr[0];
    for (var i=0; i<arr.length-1; i++){
        array2[i] = arr[i+1];
    }
    return val;
}

//Insert At
//Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, ind, val){
    array3 = [];
    array3[ind] = val;
    for (var i=0; i<ind; i++){
        array3[i] = arr[i];
    }
    for (var i=ind; i<arr.length; i++){
        array3[i+1] = arr[i];
    }
    console.log(array3);
    return array3;
}

//Remove At
//Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, ind){
    array4 = [];
    val = arr[ind];
    for (var i=0; i<ind; i++){
        array4[i] = arr[i];
    }
    for (var i=ind; i<arr.length-1; i++){
        array4[i] = arr[i+1];
    }
    return val;
}

//Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    if (arr.length%2 == 0)
		arrlen = arr.length;
	else
        arrlen = arr.length-1;

    for (var i=0; i < arrlen; i+=2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    } 
    return arr;
}

//Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.

function removeDupes(arr){
    array5 = [];
    count = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] == arr[i+1]){}
        else{
            array5[count] = arr[i];
            count++;
        }
    }
    console.log(array5);
    return array5;
}