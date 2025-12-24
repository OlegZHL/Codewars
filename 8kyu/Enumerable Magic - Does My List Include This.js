// Создайте метод, который принимает список и элемент и возвращает true,
// если элемент принадлежит списку, в противном случае false.


function include(arr, item){
  return arr.includes(item);
}

console.log(include([1,2,3,4],3));