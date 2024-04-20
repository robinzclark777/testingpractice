const analyze = require("./analyze");

test("test o - 1", () => {
  const o = analyze([1, 8, 3, 4, 2, 6]);
  expect(o).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test o - 2", () => {
  const o = analyze(["dog", 1, 8, 3, 4, 2, 6, "cat"]);
  expect(o).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
