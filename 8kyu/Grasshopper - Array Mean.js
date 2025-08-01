// Найдите среднее значение в списке чисел в массиве.
//
// Чтобы найти среднее значение набора чисел,
// сложите все числа и разделите на количество значений в списке.
//
// Для примера приведем список [1, 3, 5, 7]
//
// 1.Сложите все числа
// 1+3+5+7 = 16
//
// 2.Разделите на количество значений в списке. В этом примере в списке 4 числа.
// 16/4 = 4

// 3.Среднее значение в этом списке равно 4

function findAverage(nums) {
    let sum = 0;
    nums.forEach(item => {
        sum+=item;
    });
    return sum/nums.length;
}

console.log(findAverage([1,2,3,4,5]));