export function arrayToObject(arr) {
  const obj = {};
  arr.forEach((elem, i) => (obj[i] = elem));
  return obj;
}
