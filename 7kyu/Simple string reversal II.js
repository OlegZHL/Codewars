// В этом задании вам будет дана строка и два индекса (a и b).
// Ваша задача — перевернуть часть строки между этими двумя индексами включительно.
//
// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"
// Вводятся только строчные и прописные буквы.
//
// Первый индекс a всегда будет меньше длины строки;
// Второй индекс b может быть больше длины строки.
// Другие примеры в тестовых заданиях. Удачи!

function solve(st, a, b){
    (b > st.length)? b=st.length: b+=1;

    let arr = st.split("");
    let sliceArr = arr.slice(a,b).reverse();
    for (let i = 0; i < sliceArr.length ; i++) {
        arr[i+a] = sliceArr[i];
    }
    return arr.join("");
}

console.log(solve("codewars",1,5));