// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, — это проверить, содержит ли предоставленный массив это значение.

// a может содержать числа или строки. x может быть любым.

// Вернуть true если массив содержит значение, false если нет.

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
      return true;
    }
  }
  return false;
}

console.log(check([101, 45, 75, 105, 99, 107], 107));
