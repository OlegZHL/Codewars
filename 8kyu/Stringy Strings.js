// Напишите мне функцию stringy которая принимает size и возвращает string чередующиеся 1 и 0.
// Строка должна начинаться с 1.
// Строка с size 6 должна вернуть :'101010'.
//
// Размер всегда будет положительным и будет выражаться только целыми числами.

function stringy(size){
    let result = '';
    for (let i = 1; i <= size; i++){
        (i%2 === 0)? result+=0: result+=1;
      }
    return result;
}


console.log(stringy(6));