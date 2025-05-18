// Keep in Mind
// n and m are natural numbers (positive integers)
// m excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"




function sumMul(n,m){
    let sum = 0;
        if( m <= n ){
            return "INVALID";
        } else {
            let i = n;
                while( i < m ){
                    sum+=i;
                    i = i + n;
                }
            return sum;
        }
}

console.log(sumMul(2,9));