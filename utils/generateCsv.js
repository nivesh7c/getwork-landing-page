export function generateCsvWithoutSpacing(arr, name) {
  let str = "";
  arr.forEach((item, index) => (arr.indexOf(item) !== arr.length - 1 ? (str += item[name] + ",") : (str += item[name])));
  return str;
}
