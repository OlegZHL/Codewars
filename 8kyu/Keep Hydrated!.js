// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// Натан любит кататься на велосипеде.

// Поскольку Натан знает, что важно поддерживать водный баланс, он выпивает 0,5 литра воды за час езды на велосипеде.

// Вам дано время в часах, и вам нужно вычислить количество литров, которое выпьет Натан, округлив результат в меньшую сторону.

// Например:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(11.8));
