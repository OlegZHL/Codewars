// Напишите функцию, которая удаляет все одиночные 9 между 7s.
//
// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
  let arr = str.toString().split('');
  arr.forEach((item, index, arr) => {
      if( arr[index - 1] === '7' && item === '9' && arr[index + 1] === '7'){
          arr.splice(index, 1);
      }
  });
  return arr.join('');
}

console.log(sevenAte9(79797));