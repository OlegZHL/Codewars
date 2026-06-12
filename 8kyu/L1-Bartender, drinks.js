// Дополните функцию, которая принимает на вход строку и выдает результат в соответствии
// со следующей таблицей:
//
// Input	     Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"

// Примечание: все остальное является случаем по умолчанию:
// если на вход функции подается значение, не указанное в таблице,
// то возвращаемое значение должно быть "Beer".
//
// Убедитесь, что вы учли случаи, когда некоторые слова отображаются
// с неправильным написанием заглавных букв. Например, при вводе "pOLitiCIaN" должно получиться
// "Your tax dollars".

function getDrinkByProfession(param){
    if(param.toLowerCase() === "jabroni"){
        return "Patron Tequila";
    } else if (param.toLowerCase() === "school counselor"){
        return "Anything with Alcohol";
    } else if (param.toLowerCase() === "programmer"){
        return "Hipster Craft Beer";
    } else if (param.toLowerCase() === "bike gang member"){
        return "Moonshine";
    } else if (param.toLowerCase() === "politician"){
        return "Your tax dollars";
    } else if (param.toLowerCase() === "rapper"){
        return "Cristal";
    } else{
        return "Beer";
    }
}

console.log(getDrinkByProfession("pOLitiCIaN"));