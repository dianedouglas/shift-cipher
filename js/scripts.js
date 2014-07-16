var shiftCipher = function(shiftAmount, inputPhrase){
  var alphabetChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericalChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var currentChar; //inputPhrase is split into individual characters which are put into currentChar
  var currentCharIndex; //index of where the current character lies in the alphabetChars array.
  var encodedChar;  //after the shift has been applied to currentChar, encodedChar is the output.
  var encodedPhrase = ""; //all encodedChars will be stored here and this will be the final encoded phrase to be returned.

  for (var i = 0; i < inputPhrase.length; i++){ //step through input phrase one character at a time.
    if(inputPhrase.charAt(i) === " "){
      encodedChar = " ";
    } else if(numericalChars.indexOf(inputPhrase.charAt(i)) >= 0){
      currentChar = inputPhrase.charAt(i);  //store the current character
      currentCharIndex = numericalChars.indexOf(currentChar); //store its index from numericalChars
      encodedChar = numericalChars[currentCharIndex + shiftAmount]; //encode the char.
    } else {
      currentChar = inputPhrase.charAt(i);  //store the current character
      currentCharIndex = alphabetChars.indexOf(currentChar); //store its index from alphabetChars
      encodedChar = alphabetChars[currentCharIndex + shiftAmount]; //encode the char.
    }
    encodedPhrase += encodedChar; //add it to the encoded phrase.
  }

  return encodedPhrase;
}
