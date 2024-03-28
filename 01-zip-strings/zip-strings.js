function zipStrings(strA, strB) {
  let result = ""; // Empty string for new string
  let maxStr = Math.max(strA.length, strB.length); // Looking for the largest string for max needed iteration length
  for (let i = 0; i < maxStr; i++) {
    if (i < strA.length) {
      result += strA[i]; // Just add char to result from strA if i is smaller than strA.length
    }
    if (i < strB.length) {
      result += strB[i]; // Just add char to result from strB if i is smaller than strB.length
    }
  }
  return result;
}
