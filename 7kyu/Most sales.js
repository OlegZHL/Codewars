// You work in the best consumer electronics corporation, and your boss wants
// to find out which three products generate the most revenue.Given 3
// lists of the same length like these:
//
// products: ["Computer", "Cell Phones", `Vacuum Cleaner`]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
//
// Return the three product names with the highest revenues (amount * price),
// in descending order (highest to lowest revenue).
//
// Note: if multiple products have the same revenue, order
// them according to their original positions in the input list.
//
// Вы работаете в лучшей корпорации по производству бытовой электроники,
// и ваш начальник хочет узнать, какие три продукта приносят наибольший доход.
// Даны 3 списка одинаковой длины, например:
//
// продукты: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// суммы: [3, 24, 8]
// цены:[199, 299, 399]
// Верните три названия продуктов с наибольшим доходом (amount * price) в порядке
// убывания (от наибольшего к наименьшему доходу).
//
// Примечание: если несколько товаров приносят одинаковый доход, упорядочьте
// их в соответствии с их исходными позициями во входном списке.


function top3(products, amounts, prices) {
    const pairs = products.map((product, index) => {
        const income = amounts[index] * prices[index];
        return { product, income, index }; // сохраняем индекс
    });
    // console.log(pairs);
    pairs.sort((a, b) => {
        if (b.income !== a.income) {
            return b.income - a.income;
        } else {
            return a.index - b.index;
        }
    });

    return pairs.slice(0, 3).map(pair => pair.product);
}


console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"],[5, 25, 2, 7, 10, 3, 2, 24],[51, 225, 22, 47, 510, 83, 82, 124]));