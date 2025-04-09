// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"


// Сможешь ли ты найти иголку в стоге сена?

// Напишите функцию, findNeedle() которая принимает array полный мусор, но содержащую один "needle"

// После того как ваша функция найдёт нужную строку, она должна вернуть сообщение (в виде строки), которое гласит:

// "found the needle at position " плюс к тому, index что он нашел иглу, так что:

// Пример (Ввод -> Вывод)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Примечание: В COBOL он должен возвращать "found the needle at position 6"


function findNeedle(haystack) {
    for( let i = 0; i < haystack.length; i++){
        if(haystack[i] === "needle"){
            return "found the needle at position "+ i;
        }
    }
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));