// Examples:
// age = 27   =>   "20-40"
// age = 5    =>   "4-5"
// age = 17   =>   "15-20"

function datingRange(age){
    let min = 0;
    let max = 0;
   if(age>=14 && age<100){
       min = age/2 +7;
       max = 2*(age-7);
   } else if( age<14 && age>0){
       min = age - 0.10 * age;
       max = age + 0.10 * age;
    }

    return `${Math.floor(min)}-${Math.floor(max)}`;
}

console.log(datingRange(17));

