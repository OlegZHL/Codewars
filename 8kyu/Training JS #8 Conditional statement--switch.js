// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number 
// of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always 
// be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.

// When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. 
// If you pass in all tests you can click "Submit" to submit your code.


// Завершите функцию howManydays. Она принимает 1 параметр month, который означает месяц года. В разных месяцах разное количество дней,
//  как показано в таблице ниже. Верните количество дней в month. Нет необходимости проверять ввод: месяц всегда будет больше 0 и 
//  меньше или равен 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Совет: использование default в большинстве случаев может сократить объем вашей работы.

// Когда вы закончите, нажмите «Проверить», чтобы протестировать свой код на соответствие начальным тестам, и «Попробовать», 
// чтобы протестировать свой код на соответствие всем тестам. Если вы пройдете все тесты,вы можете нажать «Отправить», чтобы отправить свой код.


function howManydays(month){
    var days;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7: 
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;

        case 2:
            days = 28;
            break;
    }
    return days;
  }

  console.log(howManydays(9));