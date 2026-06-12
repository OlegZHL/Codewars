// Функция объединения строк
// Создайте функцию с именем combineNames/combine_names/CombineNames,
// которая принимает два параметра (имя и фамилию). Функция должна возвращать полное имя.
//
//     Пример:
// При использовании "James" в качестве имени и "Stevens" в качестве фамилии функция должна возвращать "James Stevens"

const combineNames =(name,surname)=>{
    return `${name} ${surname}`;
}

console.log(combineNames("Rodion","Yashin"));

