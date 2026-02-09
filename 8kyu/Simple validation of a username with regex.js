// Напишите простое регулярное выражение для проверки имени пользователя. Допустимые символы:
//     строчные буквы,
//     цифры,
//     подчёркивание
// Длина должна составлять от 4 до 16 символов (включая пробелы).

function validateUsr(username) {
    return  /^[a-z0-9_]{4,16}$/.test(username);
}

console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));