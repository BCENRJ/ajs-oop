import Bowman from "../../src/character/bowman";

test("check type", () => {
    const char = new Bowman("John");
    expect(char.type).toBe("Bowman");
});
