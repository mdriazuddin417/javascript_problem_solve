const vowel = function regexVar() {
  let re = "bcveb";
  let vowel = ["a", "e", "i", "o", "u"];

  const newValues = re.split("");

  if (newValues[0] === newValues[newValues.length - 1]) {
    if (vowel.includes(newValues[0])) {
      re = true;
    } else {
      return (re = false);
    }
  } else {
    re = false;
  }

  return re;
};
console.log(vowel());
