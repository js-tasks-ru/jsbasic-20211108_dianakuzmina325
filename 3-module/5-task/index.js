function getMinMax(str) {
  let arrStr = str.split(" ");
  let arrNumber = arrStr.map(item => +item);
  let arrNumberFilter = arrNumber.filter(item => isFinite(item))
  arrNumberFilter.sort((a, b) => a - b);
  let min = arrNumberFilter[0];
  let max = arrNumberFilter[arrNumberFilter.length - 1];
  let result = {
    min: min,
    max: max
  }
  return result;
}
