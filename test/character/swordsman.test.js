import Swordsman from "../../src/character/swordsman";

test("check type", () => {
    const char = new Swordsman("Any");
    expect(char.type).toBe("Swordsman");
});
