// Напишите функцию, которая преобразует имя в инициалы.
// В этой задаче нужно использовать только два слова, разделенных пробелом.
//
// На выходе должны получиться две заглавные буквы, разделенные точкой.
//
// Должно получиться так:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name){
    let name1 = name.split('');
    let result = `${name1[0].toUpperCase()}.`;
    for(let i = 1; i < name1.length; i++){
        if(name1[i] === ' '){
            result+=name1[i+1].toUpperCase();
        }
    }
    return result;
}

console.log(abbrevName('John doe'));