const allowedTypes = {
    Bowman: { attack: 25, defense: 25 },
    Swordsman: { attack: 40, defense: 10 },
    Magician: { attack: 10, defense: 40 },
    Undead: { attack: 25, defense: 25 },
    Zombie: { attack: 40, defense: 10 },
    Daemon: { attack: 10, defense: 40 },
};

export default class Character {
    constructor(name, type) {
        if (typeof name !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("name must be string with length of (2-10)");
        }
        if (type === null || type in allowedTypes === false) {
            throw new Error(`Wrong type=${type}`);
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defense = null;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("impossible to lvl Up dead character");
        }
        this.level += 1;
        this.health = 100;
        this.attack += 20 * (this.attack / 100);
        this.defense += 20 * (this.defense / 100);
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defense / 100);
        }
    }
}
