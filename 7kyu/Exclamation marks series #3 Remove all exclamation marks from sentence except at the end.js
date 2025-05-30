// Описание:
// Уберите все восклицательные знаки из предложения, кроме последнего.
//
//     Примеры
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!!!"
// "!Hi"     ---> "Hi"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi"


function remove (string) {
    let arr = string.split('');
    let count = 0;
    for (let i = arr.length-1; i>=0; i--) {
        if(arr[i] === "!" && arr[i-1] === "!"){
            count++;
        } else if(arr[i] === "!" && arr[i-1] !== "!"){
            count++;
        } else if(arr[i] !== "!"){
            break;
        }
    }

    for ( let j = arr.length - (count+1) ; j >= 0; j--){
        if(arr[j] === "!" ){
            arr.splice(j, 1);
        }
    }
    return arr.join('');
}

console.log(remove("Hi!!! Hi!!"));