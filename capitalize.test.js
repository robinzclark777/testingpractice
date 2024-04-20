const capitalize = require("./capitalize");

test("returns string with 1st character capitalized", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("test 2", () => {
  expect(capitalize("CAT")).toBe("CAT");
});
