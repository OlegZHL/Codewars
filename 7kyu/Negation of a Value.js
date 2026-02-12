// В программировании используется оператор логического отрицания (!),
// который меняет значение условия на противоположное.
//
// !false = true
// !!false = false
// Ваша задача — дописать функцию 'negationValue()', которая принимает строку с отрицаниями
// и значением и возвращает значение, которое получилось бы, если бы к нему были применены эти отрицания.
//
// negationValue("!", false); //=> true
// negationValue("!!!!!", true); //=> false
// negationValue("!!", []); //=> true
// Не используйте функцию eval() или конструктор Function() в JavaScript.
//
// Примечание: всегда возвращайте логическое значение, даже если нет отрицания.

function negationValue(string, value){
    if(value === null || value === undefined || value === 0 || value === ''){
        value = false;
    } else if(typeof value !== 'boolean'){
        value = true;
    }

    let count = string.length;
    let result = value;
    while(count > 0){
        result = !result;
        count--;
    }
    return result;
}

console.log(negationValue('!!!!!!!!!!!!!!!!!!!!!!!', null));