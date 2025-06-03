// О нет! Тимми не очень внимательно следовал инструкциям и забыл,
// как пользоваться новой функцией «Шаблон строки».
// Помогите Тимми с его шаблоном строки, чтобы он работал так, как он ожидает!

function buildString(...template){
    return `I like ${template.join(', ')}!`;

}

console.log(buildString('Cheese','Milk','Chocolate'));