const reverse = require("./reverse");

test("reverses the string", () => {
  expect(reverse("dog")).toBe("god");
});
