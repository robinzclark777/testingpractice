const alphaLower = [..."abcdefghijklmnopqrstuvwxyz"];
const alphaUpper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function transform(elem, key) {
  let i = alphaLower.indexOf(elem);
  if (i >= 0) return alphaLower[(i + key) % 26];

  i = alphaUpper.indexOf(elem);
  if (i >= 0) return alphaUpper[(i + key) % 26];

  return elem;
}

function caeser(s, key) {
  let news = "";

  Array.from(s).forEach((elem) => {
    news += transform(elem, key);
  });
  return news;
}
module.exports = caeser;
