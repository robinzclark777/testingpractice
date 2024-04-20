function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function analyze(arr) {
  let o = {};
  const narr = arr.map(Number).filter((n) => !isNaN(n));
  console.log(narr);
  o.average = average(narr);
  o.min = Math.min(...narr);
  o.max = Math.max(...narr);
  o.length = narr.length;
  console.log(`obj is...${JSON.stringify(o)}`);
  return o;
}

module.exports = analyze;
