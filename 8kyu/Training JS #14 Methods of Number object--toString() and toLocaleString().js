// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// That's all of your work. My work is print your color code on your screen.

// Задача
// Кодирование в функции colorOf. функция принимает 3 параметра:r g b. Это означает значение красного, зелёного и синего цветов. Диапазон значений составляет 0-255.

// Используйте toString(16) преобразование чисел r g b в шестнадцатеричную строку. Наконец, объедините их в веб-код цвета и верните его.

// Цветовой код должен начинаться с "#". а затем использовать 2 символа для каждого цвета.

// например:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// Это вся ваша работа. Моя работа —выводить ваш цветовой код на экран.

function colorOf(r, g, b) {
    let color = "#";
    let arr = [];
    arr.push(r.toString(16));
    arr.push(g.toString(16));
    arr.push(b.toString(16));
    for (let i = 0; i < arr.length; i++){
    if (arr[i].length === 1){
        color = color + "0" + arr[i];
    } else {
        color = color + arr[i];
    }
}

    return color;
}

console.log(colorOf(255, 0, 0));
