// Отдел бизнес-аналитики вашего стартапа сообщил маркетологам,
// что у вашего сайта большая аудитория в Скандинавии и соседних странах.
// Маркетологи считают, что было бы здорово приветствовать посетителей сайта на их родном языке.
// К счастью, вы уже используете API, которое определяет местоположение пользователя,
// так что это не составит труда.
//
//     Задача
// Придумайте способ хранения языков в базе данных. Языки перечислены ниже,
// так что вы можете скопировать и вставить их!
// Напишите функцию 'welcome', которая принимает параметр 'language' типа String
// и возвращает приветствие — если оно есть в вашей базе данных.
// По умолчанию должно использоваться приветствие на английском языке
// , если языка нет в базе данных или если введен неверный параметр.
//     База данных
// Пожалуйста, измените текст в соответствии с правилами вашего языка.


function greet(language) {
    let API =[ {"english": "Welcome"},
         {language:"czech", privet:"Vitejte"},
         {language:"danish", privet: "Velkomst"},
         {language:"dutch", privet:"Welkom"},
         {language:"estonian", privet: "Tere tulemast"},
         {language:"finnish", privet:"Tervetuloa"},
         {language:"flemish", privet: "Welgekomen"},
         {language:"french", privet:"Bienvenue"},
         {language:"german", privet:"Willkommen"},
         {language:"irish", privet:"Failte"},
         {language:"italian", privet: "Benvenuto"},
         {language:"latvian", privet: "Gaidits"},
         {language:"lithuanian", privet: "Laukiamas"},
         {language:"polish", privet:"Witamy"},
         {language:"spanish", privet:"Bienvenido"},
         {language:"swedish", privet:"Valkommen"},
         {language:"welsh", privet:"Croeso"},
    ]

    for(let i = 0; i < API.length; i++){
        if(API[i].language === language){
            return API[i].privet;
        }
    }
    return 'Welcome';
}

console.log(greet("welsh"));