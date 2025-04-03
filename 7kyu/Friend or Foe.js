// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

// Напишите программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! В противном случае вы можете быть уверены, что это не...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Строки ввода будут содержать только буквы.
// Примечание: сохраняйте исходный порядок имён в выводе.


// function friend(friends){
//     let output = [];
//     for(let i = 0; i < friends.length; i++){
//         if( friends[i].length === 4){
//             output.push(friends[i]);
//         }
//     }
//     return output;
// }

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));



function friend(friends){
    const final = friends.filter((elem) => elem.length === 4);
    return final;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
