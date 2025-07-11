// Стоимость уроков в автошколе Fast & Furious (F&F) указана ниже:
//
// Время	                         Стоимость
// До 1-го часа	                     $30
// Каждые последующие полчаса**	     $10

// ** Последующие платежи рассчитываются с округлением до ближайших получаса.

// Например, если у ученика X урок длится 1 час 20 минут, с него будет взиматься плата в
// размере 40 долларов (30+10) за 1 час 30 минут, а если урок длится 5 минут,
// с него будет взиматься плата в размере 30 долларов за полный час.
//
// По доброте душевной F&F также предоставляет 5-минутный льготный период.
// Таким образом, если у студента X занятие длится 65 минут или 1 час 35 минут,
// ему придётся заплатить только за час или 1 час 30 минут соответственно.
//
// Для заданного времени урока в минутах (мин) напишите функцию стоимость,
// которая будет вычислять стоимость урока. Входные данные всегда больше 0.

function cost (mins) {
    let count = 0;
    let hour = Math.floor(mins / 60); // часы
    let minute = mins - (hour * 60); // минуты
     // console.log(hour, minute);
    if(hour >= 1 && (minute >= 0 && minute <= 5)){
         count += 30+(hour-1)*20;
    } else if(hour >= 1 && (minute > 30 && minute <= 35)){
         count += 30+10+(hour-1)*20;
    } else if(hour === 0 && (minute > 5 && minute <= 59)){
         count += 30;
    } else if(hour >= 1 && (minute > 5 && minute <= 30)){
         count += 30+10+(hour-1)*20;
    } else if(hour >= 1 && (minute > 35 && minute <= 59)){
         count += 30+20+(hour-1)*20;
    }
    return count;
}

console.log(cost(360));