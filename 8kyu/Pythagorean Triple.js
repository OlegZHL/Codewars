// Given an unsorted array of 3 positive integers [ n1, n2, n3 ],
// determine if it is possible to form a Pythagorean Triple using those 3 integers.
//
//     A Pythagorean Triple consists of arranging 3 integers, such that:
//
//     a2 + b2 = c2
//
// Examples
//     [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers:
//     32 + 42 = 52
//
//     [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers:
//     32 + 42 = 52
//
//     [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers:
//     52 + 122 = 132
//
//     [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers -
//     no matter how you arrange them, you will never find a way to satisfy the equation
//     a2 + b2 = c2
//
// Return Values
// For Python: return True or False
// For JavaScript: return true or false
// Other languages: return 1 or 0 or refer to Sample Tests.


// Даны несортированный массив из 3 положительных целых чисел [ n1, n2, n3 ].
// Определите, можно ли составить пифагорову тройку из этих 3 целых чисел.
//
//     Пифагорова тройка состоит из трёх целых чисел, таких что:
//
//     a2 + b2 = c2
//
// Примеры
//     [5, 3, 4]: с помощью этих 3 целых чисел можно составить пифагорову тройку:
//     32 + 42 = 52
//
//     [3, 4, 5]: с помощью этих 3 целых чисел можно составить пифагорову тройку:
//     32 + 42 = 52
//
//     [13, 12, 5]: с помощью этих 3 целых чисел можно составить пифагорову тройку:
//     52 + 122 = 132
//
//     [100, 3, 999] : с помощью этих 3 целых чисел НЕвозможно составить пифагорову тройку
//     — как бы вы их ни расположили, вы никогда не найдёте способ решить уравнение a2 + b2 = c2
//
// Возвращаемые значения
// Для Python: вернуть True или False
// Для JavaScript: возврат true или false
// Другие языки: вернитесь к 1 или 0 или обратитесь к примерам тестов.


function isPythagoreanTriple(integers) {
    if (Math.pow(integers[0],2) + Math.pow(integers[1],2) === Math.pow(integers[2],2)){
        return true;
    } else if(Math.pow(integers[1],2) + Math.pow(integers[2],2) === Math.pow(integers[0],2)){
        return true;
    } else if(Math.pow(integers[2],2) + Math.pow(integers[0],2) === Math.pow(integers[1],2)){
        return true;
    } else{
        return false;
    }
}

console.log(isPythagoreanTriple( [13, 12, 5]));