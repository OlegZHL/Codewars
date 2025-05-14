// Вам будет предоставлен список строк. Вы должны отсортировать его в
// алфавитном порядке (с учётом регистра и на основе значений символов в ASCII),
// а затем вернуть первое значение.
//
// Возвращаемое значение должно быть строкой с фигурными скобками "***" между буквами.
//
// Вы не должны удалять или добавлять элементы из / в массив.



function twoSort(s) {
 s.sort();
  let arr = s[0].split('');
    arr.forEach((item,index) => {
     if (index === arr.length - 1) {
         arr[index] = arr[index];
     } else {
        arr[index] = arr[index]+"***";
     }
 });
 return arr.join('');
}
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));