// Для этой ката вам придётся забыть, как складывать два числа.
//
// Проще говоря, наш метод не использует принцип переноса и просто записывает каждое вычисленное число :-)
//
// Вы можете считать, что оба числа положительные.

function add(num1, num2) {
        let num11 = num1.toString();
        let num22 = num2.toString();

        if (num11.length > num22.length) {
            while (num11.length > num22.length) {
                num22 = "0" + num22;
            }
        }

        if (num22.length > num11.length) {
            while (num22.length > num11.length) {
                num11 = "0" + num11;
            }
        }

        let number1 = num11.split("");
        let number2 = num22.split("");

        let sum = "";
        let sumFor= 0;
            for (let i = 0; i < number1.length; i++) {
                sumFor = Number(number1[i]) + Number(number2[i]);
                sum = sum + sumFor.toString();
            }
    return parseInt(sum);
}

console.log(add(38810, 1383));