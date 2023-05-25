import Magician from "../../src/character/magician";

test("check type", () => {
    const char = new Magician("Alex");
    expect(char.type).toBe("Magician");
});
