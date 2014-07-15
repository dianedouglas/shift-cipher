var shiftCipher = function(shiftAmount, inputPhrase){
  var currentChar = inputPhrase; //deal with parsing into individual characters later here.

  var alphabetChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var currentCharIndex = alphabetChars.indexOf(currentChar);
  var encodedChar = alphabetChars[currentCharIndex + shiftAmount];

  return encodedChar;
}
