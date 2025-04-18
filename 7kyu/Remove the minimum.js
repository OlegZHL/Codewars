function removeSmallest(numbers){
    let j = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(j > numbers[i]){
        j = numbers[i];
    }
}

const firstIndex = numbers.indexOf(j);
return numbers.filter((item,index) => index !== firstIndex);

}
console.log(removeSmallest([5, 3, 2, 1, 4]));