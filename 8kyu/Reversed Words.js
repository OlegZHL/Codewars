// Дополните решение так, чтобы оно переворачивало все слова в переданной строке.
// Слова разделяются ровно одним пробелом, начальные и конечные пробелы отсутствуют.

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("hello world!"));