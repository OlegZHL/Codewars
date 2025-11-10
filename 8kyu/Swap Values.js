// Я хотел бы иметь возможность передавать массив из двух элементов в свою функцию swapValues
// для обмена значениями. Однако, похоже, значения не меняются.
//
// Можете ли вы понять, что здесь не так?

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}