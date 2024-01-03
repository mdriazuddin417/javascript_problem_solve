function mostCommonCharacter(str) {
  const charCount = {}; // Object to store character counts

  // Count occurrences of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxCount = 0;
  let mostCommonChar = "";

  // Find the character with the maximum count
  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostCommonChar = char;
    }
  }

  return mostCommonChar;
}

console.log(mostCommonCharacter("hello")); // Output: 'l'
console.log(mostCommonCharacter("apple")); // Output: 'p'
console.log(mostCommonCharacter("abracadabra")); // Output: 'a'
