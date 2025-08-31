// Напишите функцию, которая принимает в качестве аргумента список строк и возвращает отфильтрованный список,
// содержащий те же элементы, но без слова «гуси».
// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:
//     ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// Например, если бы этот массив был передан в качестве аргумента:
//     ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Ваша функция вернёт следующий массив:
//     ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// Элементы в возвращаемом массиве должны быть расположены в том же порядке,
// что и в исходном массиве, переданном в вашу функцию, но без 'гусей'.
// Обратите внимание, что все строки будут написаны в том же регистре, что и исходные,
// а некоторые элементы могут повторяться.


function gooseFilter (birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for (let i = 0; i < birds.length; i++){
        for (let j = 0; j < geese.length; j++){
            if(birds[i] === geese[j]){
                delete birds[i];
            }
        }
    }
    return birds.filter(item => item !== null);
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));