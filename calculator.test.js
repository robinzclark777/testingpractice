const calculator = require("./calculator");

test("1 + 2 = 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("3 - 1 = 2", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("3 * 4 = 12", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("12 / 6 = 2", () => {
  expect(calculator.divide(12, 6)).toBe(2);
});
