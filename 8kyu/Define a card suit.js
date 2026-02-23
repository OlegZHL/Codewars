// В качестве аргумента вы получаете любую карту. Ваша задача — вернуть масть этой карты (в нижнем регистре).
// Наша колода (уже загружена):
//
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    return (card.at(-1) === "♥")? 'hearts':(card.at(-1) === "♣")?'clubs':
        (card.at(-1) === "♦")?'diamonds':'spades';
}

console.log(defineSuit('3♥'));