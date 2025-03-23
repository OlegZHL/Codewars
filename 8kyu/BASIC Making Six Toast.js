Examples:
// Story:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// 5 --> 1
// And in case of 12 you need 6 toasts less (but not -6):

// 12 --> 6



// История:
// Вы собираетесь быстро приготовить тосты и думаете, что нужно приготовить несколько тостов за один раз. Итак, вы пытаетесь приготовить 6 тостов.

// Проблема:
// Вы забыли посчитать, сколько тостов положили в тостер, и не знаете, положили ли вы в тостер ровно шесть кусочков тоста.

// Определите функцию, которая подсчитывает, на сколько больше (или меньше) кусочков тостов вам нужно в тостере. Даже если вам нужно больше или меньше, число всё равно будет положительным, а не отрицательным.

// Примеры:
// Вы должны вернуть количество тостов, которые нужно положить (или убрать). В случае, если 5 вы всё ещё можете положить 1 тосты:

// 5 --> 1
// А в случае, если 12 вам нужно 6 меньше тостов (но не -6):

// 12 --> 6


function sixToast(num) {
    let placeToast = 6;
    if( num <= placeToast){
        return placeToast - num;
    } else if(num > placeToast){
        return num - placeToast;
    }
  }

console.log(sixToast(6));