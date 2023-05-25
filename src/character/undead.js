import Character from "./core/base";

export default class Undead extends Character {
    constructor(name) {
        super(name, "Undead");
        this.attack = 25;
        this.defense = 25;
    }
}
