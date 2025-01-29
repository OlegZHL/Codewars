
// The first century spans from the year 1 up to and including the year 100, the second century - 
// from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.


// Первый век длится с 1 года по включительно 100 год, второй век — с 101 года по включительно 200 год и т. д.
// Учитывая год, верните столетие, в котором он находится.


let year = 2025;

function century(year){
    let century;

    if(year > 0){
        century = Math.ceil(year/100);
        return century;
    } else {
        return "Введите значение > 0!";
    }

}

century(year);
console.log(century(year));