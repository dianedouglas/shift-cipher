var shiftCipher = function(shiftAmount, inputPhrase){
  var alphabetChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericalChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var currentChar; //step through input phrase one character at a time, storing current character here.
  var encodedChar;  //after the shift has been applied to currentChar, encodedChar is the output.
  var encodedPhrase = ""; //all encodedChars will be stored here and this will be the final encoded phrase to be returned.

  for (var i = 0; i < inputPhrase.length; i++){ 
    currentChar = inputPhrase.charAt(i); 
    if(numericalChars.indexOf(currentChar) >= 0){  //if current char is a number
      var currentCharIndex = numericalChars.indexOf(currentChar); //store its index from numericalChars array
      encodedChar = numericalChars[currentCharIndex + shiftAmount]; //get the encoded char by applying shift amount to array.
    } else if(alphabetChars.indexOf(currentChar) >=0){  //if it's a letter, do the same with alphabetChars array.
      var currentCharIndex = alphabetChars.indexOf(currentChar); 
      encodedChar = alphabetChars[currentCharIndex + shiftAmount]; 
    } else { //if current character isn't in either array, pass it through unchanged.
      encodedChar = currentChar;
    }
    encodedPhrase += encodedChar; //add it to the encoded phrase.
  }

  return encodedPhrase;
}
