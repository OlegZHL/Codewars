// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
//
//     Example:
//
// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null


// Напишите функцию для приветствия человека. Функция будет принимать имя в качестве
// входных данных и приветствовать человека, говоря «привет». Возвращает значение
// null/nil/None, если входные данные представляют
// собой пустую строку или значение null/nil/None.
//
//     Пример:
//
// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

function greet(name) {
    return (name === "" || name === null)?null: `hello ${name}!`;
}

console.log(greet('Niks'));