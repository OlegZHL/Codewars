// В Великобританию вновь завезли волков. Вы — овцевод, и теперь вас преследуют волки,
// которые притворяются овцами. К счастью, вы умеете их распознавать.
//
// Предупредите овцу перед волком, что ее вот-вот съедят. Помните, что вы стоите в начале очереди,
// которая находится в конце массива:
//
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// Если волк — самое близкое к вам животное, верните "Pls go away and stop eating my sheep".
// В противном случае верните "Oi! Sheep number N! You are about to be eaten by a wolf!" где N
// — позиция овцы в очереди.
//
// Примечание: в массиве всегда будет ровно один волк.
//
//     Примеры
// Входные данные: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Вывод: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//
// Ввод: ["sheep", "sheep", "wolf"]
// Выходной сигнал: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
   let indexWolf = queue.reverse().indexOf('wolf');
   return (indexWolf === 0)?"Pls go away and stop eating my sheep":
            `Oi! Sheep number ${indexWolf}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));