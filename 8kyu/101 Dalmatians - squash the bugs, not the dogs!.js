// Ваш друг отправился за щенками (какое счастье, что он жив!)...
// Он возвращается с несколькими собаками, и вы просто не знаете, что сказать!
//
// Изучив предложенную функцию, вы узнаете, как именно следует реагировать в зависимости от количества собак.
//
// Количество собак всегда будет числом, и всегда будет хотя бы одна собака.

function howManyDalmatians(number){

let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

return  (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number === 101) ? dogs[3] : dogs[2];

}

console.log(howManyDalmatians(100));