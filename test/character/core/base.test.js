/* eslint-disable no-new */
import Character from "../../../src/character/core/base";

import Bowman from "../../../src/character/bowman";
import Daemon from "../../../src/character/daemon";
import Swordsman from "../../../src/character/swordsman";
import Magician from "../../../src/character/magician";
import Undead from "../../../src/character/undead";
import Zombie from "../../../src/character/zombie";

describe("constructor test", () => {
    test.each([
        ["S"],
        ["SomeLongName"],
        [undefined],
        [null],
    ])("name arg", (name) => {
        expect(() => { new Character(name); }).toThrow("name must be string with length of (2-10)");
    });

    test.each([
        ["SomeType"],
        [undefined],
        [null],
    ])("type arg", (type) => {
        expect(() => { new Character("name", type); }).toThrow(`Wrong type=${type}`);
    });

    test.each([
        ["John", Bowman, "Bowman", 25, 25],
        ["Anna", Swordsman, "Swordsman", 40, 10],
        ["Katrine", Magician, "Magician", 10, 40],
        ["Alex", Undead, "Undead", 25, 25],
        ["Freddie", Zombie, "Zombie", 40, 10],
        ["Michael", Daemon, "Daemon", 10, 40],
    ])("attributes name=%s type=%s attack=%i defense=%i", (name, Child, type, attack, defense) => {
        const char = new Child(name);
        const objectData = {
            name,
            type,
            health: 100,
            level: 1,
            attack,
            defense,
        };
        expect(char).toEqual(objectData);
    });
});

describe("levelUp method", () => {
    test("health = 0", () => {
        expect(() => {
            const char = new Character("Alex", "Undead");
            char.health = 0;
            char.levelUp();
        }).toThrow("impossible to lvl Up dead character");
    });

    test("health >= 0", () => {
        const char = new Bowman("John", "Bowman");
        const objectData = {
            name: "John",
            type: "Bowman",
            health: 100,
            level: 2,
            attack: 30,
            defense: 30,
        };
        char.levelUp();
        expect(char).toEqual(objectData);
    });
});

describe("damage method", () => {
    test("health < 0, data stays same", () => {
        const char = new Character("Anna", "Daemon");
        char.health = -1;

        const objectData = {
            name: "Anna",
            type: "Daemon",
            health: -1,
            level: 1,
            attack: null,
            defense: null,
        };
        char.damage(100);
        expect(char).toEqual(objectData);
    });

    test.each([
        [100, 10],
        [50, 55],
        [30, 73],
        [25, 77.5],
    ])("damage points=%s health=%s", (damage, health) => {
        const char = new Zombie("Freddie");
        char.damage(damage);
        expect(char.health).toBe(health);
    });
});
