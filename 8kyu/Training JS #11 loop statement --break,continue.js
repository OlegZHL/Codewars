// Task
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array,
//  a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", 
// you should push it to a bag(bag is an array, I've defined in the function); if it's other strings,
// we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full,
//  you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

// If you forgot how to push an element to array, please refer to lesson 4.



// Задача
// Кодирование в функции grabDoll. функция принимает 1 параметр:dolls. это массив строк, список кукол.

// Вам нужно перебрать dolls с помощью for цикла. Если элемент — «Hello Kitty» или «кукла Барби», 
// вы должны добавить его в bag(массив, который я определил в функции); если это другие строки, 
// мы должны использовать continue пропустить его.

// Когда bag есть три элемента, bag цикл завершается. Вам следует использовать break выход из цикла; 
// если bag цикл не завершается, вам следует пройти по dolls всем элементам.

// Верните команду bag после завершения цикла for.

// В вашем коде вы должны использовать for, break и continue. В противном случае ваше решение может не 
// пройти это задание.

// Если вы забыли, как добавить элемент в массив, пожалуйста, обратитесь к уроку 4.

function grabDoll(dolls){
    var bag=[];
    //coding here
        for(let i = 0; i < dolls.length; i++){
            if( bag.length === 3 ){
                break;
            }
            if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll"){
                bag.push(dolls[i]); 
             }  else { continue; }
        }
    return bag;
}

console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]));
