// Для заданного основания логарифма X и двух значений A и B вычислить сумму логарифмов по основанию X.

function logs(x,a,b){
    return Math.log(a*b)/Math.log(x);
}

console.log(logs(10,2,3));