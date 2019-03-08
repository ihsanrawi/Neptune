/**
 * Check url if it links to an image  
 * @param {String} url 
 */
export const isImgUrl = (url) => {
  return url.match(/[^/]+(jpeg|jpg|png|gif)$/) !== null;
}

/**
 * Shorten number over thousand
 * 
 * https://stackoverflow.com/questions/9345136/1000000-to-1m-and-1000-to-1k-and-so-on-in-js/9345181
 * @param {Number} number 
 * @param {Number} decimalPlaces 
 */
export const abbrNumber = (number, decimalPlaces = 1) => {
  if(number < 1000) return number;

  let exponent = number.toString().length;
  const decimals = Math.pow(10, decimalPlaces);
  exponent -= exponent % 3;
  const tmp = Math.pow(10, exponent);
  const shortenNumber = Math.round(number * decimals / tmp) / decimals + " kMGTPE"[exponent / 3];
  return shortenNumber;
}
