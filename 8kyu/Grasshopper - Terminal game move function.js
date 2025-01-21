// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Функция перемещения в терминальной игре
// В этой игре герой перемещается слева направо. Игрок бросает кубик и перемещается на количество клеток, указанное на кубике, дважды.

// Создайте функцию для игры на терминале, которая принимает текущую позицию героя и результат броска (от 1 до 6) и возвращает новую позицию.

// function move (position, roll) {
//     // return the new position
//   }

let roll = Math.ceil(Math.random() * 6);
let position = 0;

function move(position, roll) {
  return position = position + (roll * 2);
}

move(position, roll);

console.log(move(position, roll));
