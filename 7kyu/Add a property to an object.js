// Description:
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. 
// If the property already exists on the object, and error should be thrown.

// Описание:
// Напишите функцию, которая добавляет именованное свойство в объект. Должно быть возможно присвоить свойству новое значение. 
// Если свойство уже существует в объекте, должна быть выдана ошибка.


let obj = {};

function addProperty(obj, prop, value){
    for(let key in obj){
        if(key === prop){
            throw new Error("Did not throw expected error");
    }
}
obj[prop] = value;
return obj;
}

console.log(addProperty(obj, "name", "Palle"));

