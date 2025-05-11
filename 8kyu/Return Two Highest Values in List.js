// In this kata, your job is to return the two distinct highest values in a list.
// If their less than 2 unique values, return as many of them, as possible.
//
// The result should also be ordered from highest to lowest.
//
//     Examples:
//
// [4, 10, 10, 9]  =>  [10, 9]
//     [1, 1, 1]  =>  [1]
//     []  =>  []


function twoHighest(arr) {
    let num = 0;
    let num1 = 0;
    let arr1 =[];

    if( arr.length === 0 ) {
        return arr;
    } else if ( arr.length === 1 ) {
        return arr;
    }

    for(let i = 0; i < arr.length; i++) {
        if( num < arr[i]){
            num = arr[i];
        }
    }
    arr1.push(num);

    for(let j = 0; j < arr.length; j++) {
        if(num1 < arr[j] && arr[j] < num){
            num1 = arr[j];
        }
    }
    arr1.push(num1);

    if(arr1[1] === 0){
        arr1.splice(1,1);
    }
    return arr1;
 }

console.log(twoHighest([2,4,5,6,7,8]))