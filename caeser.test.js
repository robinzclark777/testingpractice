const caeser = require("./caeser");

test("abc - 1 -> bcd", () => {
  expect(caeser("abc", 1)).toBe("bcd");
});

test("xyz - 3 -> abc", () => {
  expect(caeser("xyz", 3)).toBe("abc");
});

test("xyz - 32 -> def", () => {
  expect(caeser("xyz", 32)).toBe("def");
});

test("XYZ - 32 -> DEF", () => {
  expect(caeser("XYZ", 32)).toBe("DEF");
});

test("XYZ? - 32 -> DEF?", () => {
  expect(caeser("XYZ?", 32)).toBe("DEF?");
});

test("space XYZ! - 32 -> space DEF?", () => {
  expect(caeser(" XYZ!", 32)).toBe(" DEF!");
});

test("Dog! - 15 -> Sdv!", () => {
  expect(caeser("Dog!", 15)).toBe("Sdv!");
});
