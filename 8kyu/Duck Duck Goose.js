//  Учитывая массив объектов Player и позицию (первая позиция — 1), верните name выбранного игрока.
//  name является свойством Player объектов, например Player.name

function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name;
}

console.log(duckDuckGoose([{name:"a"}, {name:"b"}, {name:"c"}, {name:"d"}, {name:"e"}],6));