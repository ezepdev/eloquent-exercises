// recursive implementation of isEven

function isEven(nro) {
  if (nro === 0) return true;
  if (nro === 1) return false;
  return isEven(nro - 2);
}
