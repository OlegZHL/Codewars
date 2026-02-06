// Напишите функцию с именем setAlarm/set_alarm/set-alarm/setalarm (в зависимости от языка),
// которая принимает два параметра. Первый параметр, employed, равен true, если вы работаете,
// а второй параметр, vacation равен true, если вы в отпуске.
//
// Функция должна возвращать true, если вы работаете и не находитесь в отпуске
// (поскольку именно в таких обстоятельствах вам нужно установить будильник).
// В противном случае она должна возвращать false. Примеры:
//
// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation){
    return (employed === true && vacation === false);
}

console.log(setAlarm(true, false));