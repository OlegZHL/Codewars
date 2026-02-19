// Что за черт?
// Кажется, никто из этих кодовых воинов не помнит его имя!
// Не могли бы вы помочь?
//
// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")
//
// albert.toString() --> "Hi! my name's Boris" <-- ohoh..


function Warrior(n){
    let name = n;

    this.name = function(k){
        if(k){
            name = k;
            }
        return name;
    };
}

Warrior.prototype.toString = function() {
    return "Hi! my name's " + this.name();
};

