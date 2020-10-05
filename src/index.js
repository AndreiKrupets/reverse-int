module.exports = function reverse (n) {
  n = Math.abs(n).toString();
  nStr ='';
  for (i = 0; i < n.length; i++) {
    nStr = n[i] + nStr;
  }
  return Number(nStr);
}
