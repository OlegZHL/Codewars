// Description:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// Описание:
// Учитывая число n, верните количество положительных нечетных чисел ниже n, ЛЕГКО!

// Примеры (Ввод -> Вывод)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Ожидайте больших Вложений!


function oddCount(n) {
    return Math.floor(n/2);
}

console.log(oddCount(2));