import Zombie from "../../src/character/zombie";

test("check type", () => {
    const char = new Zombie("Katrine");
    expect(char.type).toBe("Zombie");
});
