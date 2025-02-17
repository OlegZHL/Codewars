// Your task is to add a new property usersAnswer to every object in the array questions. 
// The value of usersAnswer should be set to null. The solution should work for array of any length.
// The questions array is already defined for you and is not the same as the one in the example.

// Наша задача — добавить новое свойство usersAnswer к каждому объекту в массиве questions. 
// Значение usersAnswer должно быть установлено на null. Решение должно работать для массивов любой длины.
// Массив questions уже определен для вас и не совпадает с тем, что в примере.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function addValue(questions){

    for(let i = 0; i < questions.length; i++){
        questions[i].usersAnswer = null;
    }
        return questions;
}


console.log(addValue(questions));