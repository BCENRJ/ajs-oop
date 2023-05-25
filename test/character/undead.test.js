import Undead from "../../src/character/undead";

test("check type", () => {
    const char = new Undead("Freddie");
    expect(char.type).toBe("Undead");
});
