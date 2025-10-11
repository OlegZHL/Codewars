// Создайте класс Ghost
//
// Объекты-призраки создаются без каких-либо аргументов.
// При создании объектов-призраков им случайным образом присваивается атрибут цвета «белый»,
// «жёлтый», «фиолетовый» или «красный»
//
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

let Ghost = function() {
    const colors = ["white", "yellow", "purple", "red"];
    let random = Math.floor(Math.random() * colors.length);
    this.color = colors[random];
}

const ghost = new Ghost();

console.log(ghost.color);