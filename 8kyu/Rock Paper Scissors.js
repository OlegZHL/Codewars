// Камень, Ножницы , бумага
// Давайте сыграем! Вы должны сообщить, кто из игроков выиграл! В случае ничьей сообщите Draw!.
//
// Примеры (Входные данные 1, Входные данные 2 —> Выходные данные):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if(p1 === p2){
        return "Draw!";
    } else if((p1 === "scissors" && p2 === "paper") || (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock")){
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

console.log(rps("rock","paper"));