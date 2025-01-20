// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
//Создайте боевую функцию, которая учитывает текущее здоровье игрока и полученный урон и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

// function combat(health, damage) {
//     // Write your code here
//   }

let health = 100;
let damage = 101;
let remainingHealth;

function combat(health, damage) {
  if ((remainingHealth = health - damage) > 0) {
    return remainingHealth;
  } else {
    return 0;
  }
}

combat(health, damage);
console.log(combat(health, damage));
