// Description:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// Описание:
// Дети пьют пунш.
// Подростки пьют кока-колу.
// Молодые люди пьют пиво.
// Взрослые пьют виски.
// Создайте функцию, которая получает возраст и возвращает то, что они пьют.

// Правила:

// Дети до 14 лет.
// Подростки младше 18 лет.
// Молодой человек моложе 21 года.
// У взрослых их 21 или больше.
// Примеры: (Ввод -> Вывод)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
  if (old >= 0 && old < 14) {
    return "drink toddy";
  } else if (old >= 14 && old < 18) {
    return "drink coke";
  } else if (old >= 18 && old < 21) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky";
  }
}

console.log(peopleWithAgeDrink(30));
