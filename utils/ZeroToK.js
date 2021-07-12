function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
}

export function LFormatter(num) {
  return Math.abs(num) > 99999 ? Math.sign(num) * (Math.abs(num) / 100000).toFixed(1) + "L" : Math.sign(num) * Math.abs(num);
}

export function MFormatter(num) {
  return Math.abs(num) > 999999 ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M" : Math.sign(num) * Math.abs(num);
}

export default kFormatter;
