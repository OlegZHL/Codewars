// Описание
// Все, наверное, в школьные годы сталкивались с задачкой про головы и ноги животных. Вот она:
//
//     “A farm contains chickens and cows.
//     There are x heads and y legs.
//     How many chickens and cows are there?”
// Где x <= 1000 и y <=1000
//
// Задача
// Предположим, что других видов животных нет. Определите, сколько особей каждого вида здесь обитает.
//
//     Return a tuple in Python - (chickens, cows)
// or an array list - [chickens, cows]/{chickens, cows} in all other languages
// Если сумма чисел в столбцах «голова» и «ноги» отрицательна, результат вашего вычисления будет отрицательным,
// либо вы получите плавающее значение «Нет решений» (недопустимых вариантов) или [-1, -1] в COBOL.
//
//     В форме:
//
//     [Heads, Legs] = [72, 200]
//
// VALID - [72, 200] =>             [44 , 28]
//     [Chickens, Cows]
//
// INVALID - [72, 201] => "No solutions"
// Однако, if 0 heads and 0 legs are given always return [0, 0] поскольку ноль голов должен давать ноль животных.
//
//     Есть много разных способов решить эту проблему, но все они дают один и тот же ответ.
//
//     Вам будут предоставлены только целые типы - однако будут предоставлены отрицательные значения (крайние случаи).
//
// Приятного кодирования!

function animals(heads, legs){

    if (legs % 2 !== 0){ return "No solutions";}
    if (legs < heads * 2){ return "No solutions";}
    if (legs > heads * 4){ return "No solutions";}

    let animals = [];
    let Cows = (legs - 2*heads)/2;
    animals[1] = Cows;
    let Chickens = (legs - 4*Cows)/2;
    animals[0] = Chickens;

    if (Cows < 0 || Chickens < 0){ return "No solutions";}
    return animals;
}

console.log(animals(-227.5,252.5));
