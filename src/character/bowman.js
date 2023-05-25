import Character from "./core/base";

export default class Bowman extends Character {
    constructor(name) {
        super(name, "Bowman");
        this.attack = 25;
        this.defense = 25;
    }
}
