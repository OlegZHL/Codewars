// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, 
// Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.



// Отладка синтаксиса If/else
// Создавая игру, ваш напарник Грег решил создать функцию для проверки, жив ли пользователь, под названием checkAlive/CheckAlive/check_alive. К сожалению, 
// Грег допустил несколько ошибок при создании функции.

// checkAlive/CheckAlive/check_alive должно возвращать значение true, если здоровье игрока больше 0, или значение false, если оно равно 0 или меньше.

// Функция принимает один параметр,healthкоторый всегда будет целым числом от -10 до 10.

function checkAlive (health) {
    if (health > 0 && health <=10) {
      return true;
    } else if ( health <= 0 && health >= -10) {
      return false;
    }
  }
  
console.log(checkAlive(5));