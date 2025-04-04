// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.


// Пожалуйста, напишите функцию, которая суммирует элементы списка, но игнорирует повторяющиеся элементы.

// Например, для списка [3, 4, 3, 6] функция должна возвращать 10,
// а для списка [1, 10, 3, 10, 10] функция должна возвращать 4.


function sumNoDuplicates(numList) {
    let sum = 0;
    const arrFilter = numList.filter((elem) =>{
        return numList.indexOf(elem) === numList.lastIndexOf(elem);
    });
    arrFilter.map((elem) => sum+=elem);
    return sum;
    }


console.log(sumNoDuplicates([1, 10, 3, 10, 10]));

