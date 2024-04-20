function reverse(s) {
  return s.split("").reduce((acc, char) => char + acc, "");
}
module.exports = reverse;
