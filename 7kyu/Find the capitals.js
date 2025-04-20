// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word)
// as its argument, and returns an ordered list containing the indices of all capital (uppercase)
// letters in the string.
//
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
//
// Инструкции
// Напишите функцию, которая принимает в качестве аргумента одну непустую строку, состоящую только из строчных и
// прописных букв ASCII (word), и возвращает упорядоченный список, содержащий индексы всех прописных (заглавных)
// букв в строке.
//
// Пример (Ввод -> Вывод)
// "CodEWaRs" --> [0,3,4,6]


let capitals = function (word) {
    let result=[];
    word.split('').forEach((item,index) => {
        if(item.toUpperCase() === item){
            result.push(index);
        }
    })
    return result;
};

console.log(capitals("AAbBCccDDd"));