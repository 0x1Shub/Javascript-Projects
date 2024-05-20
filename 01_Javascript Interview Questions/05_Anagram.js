/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();

  if (lowerStr1.length != lowerStr2.length) {
    return false;
  }

  const sortedStr1 = lowerStr1.split("").sort().join("");
  const sortedStr2 = lowerStr2.split("").sort().join("");

  if (sortedStr1 == sortedStr2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
