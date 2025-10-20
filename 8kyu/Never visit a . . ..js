// Вычтите сумму
// ПРИМЕЧАНИЕ! Это ката может оказаться сложнее обычных ката 8-го кю (например, 7-го или 6-го кю)
//
// Дополните функцию, которая получает на вход число n таким образом, что n >= 10 и n < 10000, тогда:
//
// Сложите все цифры n.
// Вычтите сумму из n, и вы получите новое n.
// Если новый n элемент есть в списке ниже, верните соответствующий фрукт, в противном случае вернитесь к заданию 1.
//
// Пример
// n = 325
// сумма = 3+2+5 = 10
// n = 325-10 = 315 (нет в списке)
// сумма = 3+1+5 = 9
// n = 315-9 = 306 (нет в списке)
// сумма = 3+0+6 = 9
// n =306-9 = 297 (нет в списке)
// .
// .
// .
// ...пока не найдёте первое n в списке ниже.
//
// Встроенного кода, который мог бы вам помочь, нет.
// Речь не о навыках программирования; думайте, прежде чем писать код
//
// 1-kiwi
// 2-pear
// 3-kiwi
// 4-banana
// 5-melon
// 6-banana
// 7-melon
// 8-pineapple
// 9-apple
// 10-pineapple
// 11-cucumber
// 12-pineapple
// 13-cucumber
// 14-orange
// 15-grape
// 16-orange
// 17-grape
// 18-apple
// 19-grape
// 20-cherry
// 21-pear
// 22-cherry
// 23-pear
// 24-kiwi
// 25-banana
// 26-kiwi
// 27-apple
// 28-melon
// 29-banana
// 30-melon
// 31-pineapple
// 32-melon
// 33-pineapple
// 34-cucumber
// 35-orange
// 36-apple
// 37-orange
// 38-grape
// 39-orange
// 40-grape
// 41-cherry
// 42-pear
// 43-cherry
// 44-pear
// 45-apple
// 46-pear
// 47-kiwi
// 48-banana
// 49-kiwi
// 50-banana
// 51-melon
// 52-pineapple
// 53-melon
// 54-apple
// 55-cucumber
// 56-pineapple
// 57-cucumber
// 58-orange
// 59-cucumber
// 60-orange
// 61-grape
// 62-cherry
// 63-apple
// 64-cherry
// 65-pear
// 66-cherry
// 67-pear
// 68-kiwi
// 69-pear
// 70-kiwi
// 71-banana
// 72-apple
// 73-banana
// 74-melon
// 75-pineapple
// 76-melon
// 77-pineapple
// 78-cucumber
// 79-pineapple
// 80-cucumber
// 81-apple
// 82-grape
// 83-orange
// 84-grape
// 85-cherry
// 86-grape
// 87-cherry
// 88-pear
// 89-cherry
// 90-apple
// 91-kiwi
// 92-banana
// 93-kiwi
// 94-banana
// 95-melon
// 96-banana
// 97-melon
// 98-pineapple
// 99-apple
// 100-pineapple

function subtractSum(n){
   let num = whilesum(n);

//    // if(num > 0 && num <= 0){
//    //     return 11;
//    // } else{
//    //     return while
//    // }
// let  i = 0
//     while (num > 100){
//     num = num*0 + whilesum(num)
//         i++
//
//     }
    return num

}

function whilesum(n){
    let sum = 0;
    let str = String(n);
    str.split('').map(item => sum += Number(item));
    let final = n - sum;
    return final;
}


console.log(subtractSum(243));