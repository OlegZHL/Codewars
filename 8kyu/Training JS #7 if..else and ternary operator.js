// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, 
// different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number 
// of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.


// Полная функция saleHotdogs/SaleHotDogs/sale_hotdogs, функция принимает 1 параметр:n, n — количество хот-догов, которые купит клиент, 
// разные количества стоят по-разному (см. следующую таблицу), верните, сколько денег потратит клиент на покупку этого количества хот-догов.

// количество хот-догов	цена за единицу (центы)
// n < 5	100
// n >= 5 и n < 10	95
// n >= 10	90
// Вы можете использовать if ..else или тернарный оператор для его завершения.



function saleHotdogs(n){

    return (n > 0 && n < 5)? 100*n : (n >= 5 && n < 10)? 95*n : 90*n;

}

   let n = 100;
   saleHotdogs(n);

   console.log(saleHotdogs(n));