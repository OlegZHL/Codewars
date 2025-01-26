// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Это конец учебного года, судьбоносный момент вашего школьного отчёта. Нужно подсчитать средние баллы. Все ученики приходят к вам и просят подсчитать их средние баллы. Легко! Вам просто нужно написать сценарий.

// Верните среднее значение заданного массива, округлённое вниз до ближайшего целого числа.

// Массив никогда не будет пустым.

let marks = [5, 5, 5, 4, 4, 3, 5, 4, 5];

function getAverage(marks){
    let sum = 0;

    for( let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    let averageValue = Math.floor(sum/marks.length);
    return averageValue;
  }
  

  getAverage(marks);
  console.log(getAverage(marks));