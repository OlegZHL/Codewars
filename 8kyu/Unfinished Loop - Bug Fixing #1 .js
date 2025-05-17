// Незаконченный цикл - Исправление ошибки # 1
// О нет, Тимми создал бесконечный цикл! Помогите Тимми найти и исправить
// ошибку в его незаконченном цикле for!

function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

console.log(createArray(2));