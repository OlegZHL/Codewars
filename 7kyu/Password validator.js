// Description
// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

// Examples:
// password("Abcd1234"); ===> true
// password("Abcd123"); ===> false
// password("abcd1234"); ===> false
// password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
// password("ABCD1234"); ===> false
// password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
// password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
// Extra info
// You will only be passed strings.
// The string can contain any standard keyboard character.
// Accepted strings can be any length, as long as they are 8 characters or more.

// Описание
// Ваша задача — создать простую функцию проверки пароля, как на многих веб-сайтах.

// Правила для получения действительного пароля следующие:

// Там должна быть как минимум 1 заглавная буква.
// Там должна быть как минимум 1 строчная буква.
// Там должно быть как минимум 1 число.
// Длина пароля должна составлять не менее 8 символов.
// Вам разрешается использовать любые методы для подтверждения пароля.

// Примеры:
// password("Abcd1234"); ===> true
// password("Abcd123"); ===> false
// password("abcd1234"); ===> false
// password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
// password("ABCD1234"); ===> false
// password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
// password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
// Дополнительная информация
// Вам будут передаваться только строки.
// Строка может содержать любой стандартный символ клавиатуры.
// Допустимые строки могут быть любой длины, но не менее 8 символов.

function password(str) {
  let upperCase = false;
  let lowerCase = false;
  let numStr = false;
  if (str.length >= 8) {
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[0-9]/)) {
        numStr = true;
      } else if (str[i].match(/[a-zа-я]/)) {
        upperCase = true;
      } else if (str[i].match(/[A-ZА-Я]/)) {
        lowerCase = true;
      }
    }
  } else {
    console.log("Введите пароль не менее 8 символов!");
  }

  let result = (upperCase === true && lowerCase === true && numStr === true);
  return result;
}

console.log(password('(Fu,<(niUjX0'));
