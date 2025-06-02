// Описание:
// Переместите все восклицательные знаки в конец предложения
//
// Примеры
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"


function remove (string) {
        let count = 0;
        string.split('').forEach(item =>(item ==='!')? count++ : count+=0);
        let arr = (string.split('').filter(item => item !=='!')).join('');
        while(count > 0){
           arr+= "!";
           count--;
        }
        return arr;
}

console.log(remove("Hi! Hi!! Hi!"));