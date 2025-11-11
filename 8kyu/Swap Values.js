// Я хотел бы иметь возможность передавать массив из двух элементов в свою функцию swapValues
// для обмена значениями. Однако, похоже, значения не меняются.
//
// Можете ли вы понять, что здесь не так?

function swapValues(arr) {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}

console.log(swapValues([1,2]));