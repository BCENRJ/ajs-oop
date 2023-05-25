import Character from "./core/base";

export default class Zombie extends Character {
    constructor(name) {
        super(name, "Zombie");
        this.attack = 40;
        this.defense = 10;
    }
}
