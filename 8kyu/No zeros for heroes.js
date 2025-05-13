// Числа, заканчивающиеся нулями, скучны.
//
//Они могут быть забавными в вашем мире, но не здесь.
//
//Избавьтесь от них. Только от тех, которые заканчиваются.
//
// 1450 -> 145
// 960000 -> 96
// 1050   -> 105
// -1050 -> -105
// 0 -> 0
// Примечание: Ноль следует оставить как есть.

function noBoringZeros(n) {
    let arr = String(n).split('');
    let ind = 0;

    if (arr[0] === "0") {
        return Number(arr[0]);
    } else {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] !== "0") {
                ind += i;
                break;
            }
        }
        return Number((arr.splice(0, ind + 1)).join(''));
    }
}

console.log(noBoringZeros(1050));