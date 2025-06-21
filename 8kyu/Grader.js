// Создайте функцию, которая принимает число в качестве аргумента и возвращает оценку,
// основанную на этом числе.
//
// Оценка	                                        Класс
// Любое значение больше 1 или меньше 0,6	         «F»
// 0,9 или больше	                                 «А»
// 0,8 или больше	                                 «B»
// 0,7 или больше	                                 «С»
// 0,6 или больше	                                 «D»


function grader(score) {
     if(score > 1 || score < 0.6){
         return "F";
     } else if(score >= 0.9 && score <=1){
         return "A";
     } else if(score >= 0.8 && score < 0.9){
         return "B";
     } else if(score >= 0.7 && score < 0.8){
         return "C";
     } else if(score >= 0.6 && score < 0.7){
         return "D";
     }
}

console.log(grader(0.7));