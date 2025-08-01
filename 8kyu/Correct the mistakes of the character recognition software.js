// Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов.
// Таким образом, тексты можно редактировать, искать в них информацию и сохранять на компьютере.
//
// При оцифровке документов (особенно старых, напечатанных на пишущей машинке)
// программы распознавания символов часто допускают ошибки.
//
// Ваша задача — исправить ошибки в оцифрованном тексте. Вам нужно исправить только следующие ошибки:
//
// S неверно истолковывается как 5
// O неверно истолковывается как 0
// I неверно истолковывается как 1
// Тестовые примеры содержат числа только по ошибке.



function correct(string) {
    let str = string.split('');
    return str.map(el => (el === '5')? 'S': (el === '0')? 'O': (el === '1')? 'I': el).join('');
}

console.log(correct("PAR15"));

