import Daemon from "../../src/character/daemon";

test("check type", () => {
    const char = new Daemon("Anna");
    expect(char.type).toBe("Daemon");
});
