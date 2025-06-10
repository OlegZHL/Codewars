// Напишите функцию, которая рассчитывает сумму чаевых на основе общей стоимости счёта и услуги.
//
// Вам необходимо учитывать следующие рейтинги:
//
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// Рейтинг не зависит от регистрового регистра (т. е. "great" = "GREAT").
// Если получен неизвестный рейтинг, необходимо вернуть:
//     "Rating not recognised" на Javascript, Python и Ruby...
// ...или null на Java
// ...или -1 в C#
// Поскольку вы хороший человек, вы всегда оставляете чаевые, независимо от качества обслуживания.


function calculateTip(amount, rating) {
    let ratingLower = rating.toLowerCase();
    if (ratingLower === 'excellent') {
        return Math.ceil((amount * 20) / 100);
    } else if (ratingLower === 'great') {
        return Math.ceil((amount * 15) / 100);
    } else if (ratingLower === 'good') {
        return Math.ceil((amount * 10) / 100);
    } else if (ratingLower === 'poor') {
        return Math.ceil((amount * 5) / 100);
    } else if (ratingLower === 'terrible') {
        return 0;
    } else {
        return "Rating not recognised";
    }
}

console.log(calculateTip(26.95, "poor"));