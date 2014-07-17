var shiftCipher = function(shiftAmount, inputPhrase){
  var alphabetChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericalChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var currentChar; //step through input phrase one character at a time, storing current character here.
  var encodedChar;  //after the shift has been applied to currentChar, encodedChar is the output.
  var encodedPhrase = ""; //all encodedChars will be stored here and this will be the final encoded phrase to be returned.

  for (var i = 0; i < inputPhrase.length; i++){ 
    currentChar = inputPhrase.charAt(i); 
    if(numericalChars.indexOf(currentChar) >= 0){  //if current char is a number
      encodedChar = encodeOneCharacter(shiftAmount, currentChar, numericalChars);
    } else if(alphabetChars.indexOf(currentChar) >=0){  //if it's a letter, do the same with alphabetChars array.
      encodedChar = encodeOneCharacter(shiftAmount, currentChar, alphabetChars);
    } else { //if current character isn't in either array, pass it through unchanged.
      encodedChar = currentChar;
    }
    encodedPhrase += encodedChar; //add it to the encoded phrase.
  }

  return encodedPhrase;
}

var encodeOneCharacter = function(shiftAmount, inputChar, searchCharacters){
  var encodedChar; 

  var currentCharIndex = searchCharacters.indexOf(inputChar); //store input character's index from searchCharacters array (numerical or alphabetical)
  while(currentCharIndex + shiftAmount >= searchCharacters.length){ //while the sum of the current index and shift amount is out of range
    shiftAmount--; //decrement shift amount and increment the current char by 1, looping it back to 0 until shift amount is decremented enough to be in range.
    if(currentCharIndex < searchCharacters.length-1){ //if the next array index is not out of range         
      currentCharIndex++; //increment the current char index by 1
    } else {
      currentCharIndex = 0; //else reset to 0.
    }
  }
  encodedChar = searchCharacters[currentCharIndex + shiftAmount]; //get the encoded char by applying shift amount to array.

  return encodedChar;
}
