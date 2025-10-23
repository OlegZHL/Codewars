// ПОМОГИТЕ!
// Джейсон не может найти свой учебник!
// До экзамена осталось два дня, а учебники Джейсона разбросаны!
// Помогите ему отсортировать список (ArrayList в Java),
// в котором перечислены все учебники по предметам, чтобы он мог подготовиться к экзамену.
//
// Сортировка НЕ должна зависеть от регистра

function sorter(textbooks) {
    return textbooks.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}

console.log(sorter( ['Alg#bra', '$istory', 'Geom^try', '**english']));
