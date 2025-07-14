// Ваша задача — удалить все повторяющиеся подряд слова из строки,
// оставив только первые вхождения слов.
// Например:
//
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"
// Слова будут разделены одним пробелом. В строке не будет начальных и конечных пробелов.
// Пустая строка (0 слов) является допустимым вводом.

function removeConsecutiveDuplicates(string) {
    return  string.split(' ').filter((item,index,arr)=> item !== arr[index-1]).join(' ');
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));