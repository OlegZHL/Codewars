// Description:
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// Описание:
// В твоем классе был тест, и ты его сдал. Поздравляю!

// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.

// Вы получаете массив с результатами тестов ваших одноклассников. Теперь вычислите среднее значение и сравните свой результат!

// Возвращайся, true если тебе станет лучше, иначе false!

// Примечание:
// Ваши баллы не включены в общий список баллов вашего класса. Не забывайте о них при подсчёте среднего балла!

function betterThanAverage(classPoints, yourPoints) {
  let averageNumber = 0;
  let j = 0;
  for (let i = 0; i < classPoints.length; i++) {
    averageNumber = averageNumber + classPoints[i];
    j = j + 1;
  }
  return result = averageNumber / j < yourPoints ? true : false;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
