// Давайте представим, что у нас есть популярная онлайн-игра в жанре RPG.
// Игрок начинает с 0 очков в классе E5. A1 —самый высокий уровень, которого может достичь игрок.
//
// Теперь предположим, что игрок хочет повысить свой ранг до E4.
// Для этого игроку нужно набрать не менее 100 очков, чтобы пройти квалификационный этап.
//
// Напишите скрипт, который будет проверять, набрал ли игрок не менее 100 очков в своём классе.
// Если да, то он переходит в отборочный этап.
//
// В этом случае мы возвращаем "Well done! You have advanced to the qualifying stage.
// Win 2 out of your next 3 games to rank up.".
//
// В противном случае возвращаем False/false используемый язык).

function playerRankUp (points) {
    return (points >=100)?"Well done! You have advanced to the qualifying stage." +
        " Win 2 out of your next 3 games to rank up.":false;
}

console.log(playerRankUp(102));