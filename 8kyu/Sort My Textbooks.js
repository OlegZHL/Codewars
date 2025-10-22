// ПОМОГИТЕ!
// Джейсон не может найти свой учебник!
// До экзамена осталось два дня, а учебники Джейсона разбросаны!
// Помогите ему отсортировать список (ArrayList в Java),
// в котором перечислены все учебники по предметам, чтобы он мог подготовиться к экзамену.
//
// Сортировка НЕ должна зависеть от регистра


function sorter(textbooks){
    return textbooks.sort((a,b)=> a.localeCompare(b,"en", {'sensitivity':'base'}));
}

console.log(sorter( ['Algebra', 'history', 'Geometry', 'english']));
