    // Return the number (count) of vowels in the given string.
    //
    // We will consider a, e, i, o, u as vowels for this Kata (but not y).
    //
    // The input string will only consist of lower case letters and/or spaces.

        // Возвращает количество гласных в заданной строке.
        //
        // В этой ката мы будем считать гласные a, e, i, o, u (но не y).
        //
        // Входная строка будет состоять только из строчных букв и / или пробелов.



    function getCount(str) {
        let count = 0;
        str.split('').forEach((item)=>{
            if(item === "a" || item === "e" ||
            item === "i" || item === "o" ||
            item === "u"){
                count++;
            }
        });
    return count;
    }

    console.log(getCount('abracadabra'));