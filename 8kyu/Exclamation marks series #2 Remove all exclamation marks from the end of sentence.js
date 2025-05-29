// Описание:
// Удалите все восклицательные знаки в конце предложения.
//
//     Примеры
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove(string) {
     let arr = string.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        if(arr[i] === "!" && arr[i - 1] === "!"){
            arr.splice(i, 1);
        } else if(arr[i] === "!" && arr[i - 1] !== "!"){
            arr.splice(i, 1);
            break;
        } else if(arr[i] !== "!"){
            break;
        }
    }
    return arr.join('');
}

console.log(remove("pq! nr! mm ldm flmbtu"));