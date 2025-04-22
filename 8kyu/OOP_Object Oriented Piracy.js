
class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }
    isWorthIt() {
        let calculation = this.draft - 1.5 * this.crew;
        return calculation > 20;
    }
}
const titanic =  new Ship(15, 10);
console.log(titanic.isWorthIt());
