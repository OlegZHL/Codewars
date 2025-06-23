// Создайте функцию, которая возвращает среднее значение массива чисел («баллов»),
// округленное до ближайшего целого числа. Вам неразрешается использовать какие-либо циклы
// (включая циклы for, for/in, while и do/while).
//
// Массив никогда не будет пустым.


    function average(scores){
        let sum = 0;
        scores.map(item => sum += item);
        return Math.round(sum/scores.length);
    }

    console.log(average([49,3,5,300,7]));