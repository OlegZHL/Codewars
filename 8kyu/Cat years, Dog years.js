// У меня есть кошка и собака.
//
// Я купил их одновременно с котёнком/щенком. Это было humanYears лет назад.
//
// Теперь верните их возраст в виде [humanYears,catYears,dogYears]
//
// Примечания:
//
// humanYears >= 1
// humanYears это только целые числа
// Кошачьи Годы
// 15 кошачьи годы для первого года жизни
// +9 кошачьи годы на второй год
// +4 кошка за каждый год после этого
// Собачьи годы
// 15 собачьи годы за первый год
// +9 собачьи годы на второй год
// +5 Собачьи годы за каждый последующий год


 function humanYearsCatYearsDogYears(humanYears){
    let arr = [];
    let cat = 0;
    let dog = 0;
        if(humanYears === 1){
            cat+=15;
            dog+=15;
        } else if(humanYears === 2){
            cat+=24;
            dog+=24;
        } else if(humanYears > 2){
            cat = 24+(4*(humanYears-2));
            dog = 24+(5*(humanYears-2));
        }
        arr[0] = humanYears;
        arr[1] = cat;
        arr[2] = dog;

    return arr;
}

console.log(humanYearsCatYearsDogYears(10));