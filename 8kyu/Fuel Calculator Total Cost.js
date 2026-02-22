// В этом задании вам нужно написать функцию, которая принимает litres и pricePerLitre (в долларах)
// в качестве аргументов.
// При покупке 2 и более литров предоставляется скидка 5 центов за литр, при покупке 4 и более литров
// — скидка 10 центов за литр и так далее за каждые два литра, но максимальная скидка не может превышать
// 25 центов за литр. Верните общую стоимость, округленную до двух знаков после запятой.
// Также можно предположить, что входные данные не будут
// отрицательными или нечисловыми.
//     Удачи!

function fuelPrice(litres, pricePerLitre){
    let result;
    if(litres === 0 || litres === 1){
         result = pricePerLitre*litres;
    } else if(litres === 2 || litres === 3){
         result = pricePerLitre*litres - (litres*0.05);
    } else if(litres === 4 || litres === 5){
         result = pricePerLitre*litres - (litres*0.1);
    } else if(litres === 6 || litres === 7){
         result = pricePerLitre*litres - (litres*0.15);
    } else if(litres === 8 || litres === 9){
         result = pricePerLitre*litres - (litres*0.2);
    } else {
         result = pricePerLitre*litres - (litres*0.25);
    }
    return +(result.toFixed(2));
}

console.log(fuelPrice(8, 2.5));