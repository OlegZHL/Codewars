// Description:
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function
// to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will
// always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return
// an empty object {} (empty Dictionary in C#).

// У вас есть приложение для группового чата, но кто находится онлайн!?

// Вы хотите показать своим пользователям, кто из их друзей онлайн и доступен для общения!

// Учитывая ввод массива объектов, содержащих имена пользователей, статус и время с момента последнего действия (в минутах),
// создайте функцию для определения того, кто является online, offline и away.

// Если кто-то online но его lastActivity не было больше 10 минут назад, то он считается away.

// Входные данные имеют следующую структуру:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// Соответствующий вывод должен выглядеть следующим образом:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если, например, нет ни одного пользователя,online то результат должен выглядеть следующим образом:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// имя пользователя всегда будет string, статус всегда будет либо 'online', либо 'offline' (перечисление UserStatus в C#) и
// lastActivity всегда будет number >= 0.

// Наконец, если у вас нет друзей в приложении для чата, ввод будет пустым массивом.[]. В этом случае вы должны вернуть пустой объект.{}
// (пустой словарь в C#).

let friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Oleg",
    status: "online",
    lastActivity: 9,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
  {
    username: "Mark",
    status: "online",
    lastActivity: 110,
  },
];

const whosOnline = (friends) => {
  let statusUsers = {};
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i]["status"] === "online") {
      if (friends[i].lastActivity > 10) {
        statusUsers.away = arr;
        statusUsers.away.push(friends[i].username);
      } else if ( friends[i].lastActivity >= 0 && friends[i].lastActivity <= 10) {
        statusUsers.online = arr1;
        statusUsers.online.push(friends[i].username);
      }
    } else if (friends[i]["status"] === "offline") {
      statusUsers.offline = arr2;
      statusUsers.offline.push(friends[i].username);
    }
  }
  return statusUsers;
}

console.log(whosOnline(friends));

