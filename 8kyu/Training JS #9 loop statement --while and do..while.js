// Task
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, 
// alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right 
// side, and so on.

// Finally, return the padded string.


// Задача
// Полная функция padIt, которая принимает 2 параметра:

// str: строка, представляющая строку для заполнения. Мы заполним её "*" символами слева и справа.
// n: число, указывающее, сколько раз нужно дополнить строку.
// Поведение
// Вам нужно написать оператор цикла внутри функции, которая выполняет цикл n раз. При каждом проходе цикла она будет добавлять 
// по одному * к str, чередуя, с какой стороны добавлять: в первый раз добавит * к левой стороне str, во второй раз добавит * к правой 
// стороне и так далее.

// Наконец, верните заполненную строку.


function padIt(str,n){

let sum = str;
while(n > 0){
  (n % 2 === 0) ? (sum = sum + "*"): (sum = "*" + sum);
    n--;
  }
return sum; 
}

console.log(padIt("a",5));