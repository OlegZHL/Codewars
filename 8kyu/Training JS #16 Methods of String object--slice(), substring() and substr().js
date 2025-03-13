// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

//     Задача
// Кодирование в функции cutIt, функция принимает 1 параметр:arr. arr — это массив строк.

// Первое задание: Пройдя arr, найдите строку наименьшей длины.

// Вторая задача: снова перебирая arr строки, найдите самую короткую (начиная с индекса 0). Для этого можно использовать одну из функций slice(), substring() или substr(). Верните результат после завершения работы.

// например:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

function cutIt(arr) {
    let arrSl = [];
    let arrL = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < arrL.length) {
            arrL = arr[i];
    }
}
    for (let j = 0; j < arr.length; j++) {
        arrSl.push(arr[j].slice(0, arrL.length));
}
    return arrSl;
}

console.log(cutIt(["codewars", "javascript", "java"]));
