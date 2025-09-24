// Эта функция должна возвращать объект, но она работает не так, как задумано. Что не так?

function mystery(){
    let results =
        {sanity: 'Hello'};
    return results;
}

console.log(mystery());