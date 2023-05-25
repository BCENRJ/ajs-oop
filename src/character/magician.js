import Character from "./core/base";

export default class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
        this.attack = 10;
        this.defense = 40;
    }
}
