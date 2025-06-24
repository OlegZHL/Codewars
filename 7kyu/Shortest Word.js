// Простое задание:
// дана строка слов, нужно вернуть длину самого короткого слова (слов).
//
// Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.

function findShort(s){
     let arr = s.split(' ');
     let lengthElem = arr[0].length;
     for (let i = 0; i < arr.length; i++) {
         if( lengthElem > arr[i].length){
             lengthElem = (lengthElem - lengthElem) + arr[i].length;
         }
     }
     return lengthElem;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

