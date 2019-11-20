/**
 * Give a random integer between 0 and the limit (excluded)
 * @param {number} limit 
 * @returns {integer} a random integer
 */
function randomInt(limit) {
    return Math.floor(Math.random() * limit);
}

/**
 * Compare two arrays for strict similary
 * @param {array[]} array1
 * @param {array[]} array2
 * @returns {bool} true if arrays are similar
 */
function areArraysSimilar(array1, array2) {
  if (array1.length !== array2.length) return false;

  const arrayLength = array1.length;

  for (let i = 0; i < arrayLength; i++) {
    const element1 = array1[i];
    const element2 = array2[i];
    if (element1 !== element2) {
      return false;
    }
  }
  return true;
}