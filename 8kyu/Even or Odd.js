// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает "Even" для чётных чисел или "Odd" для нечётных чисел.



let number = 4;

function evenOrOdd(number){
    if(number % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }

}

evenOrOdd(number);
console.log(evenOrOdd(number));