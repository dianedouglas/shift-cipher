var shiftCipher = function(shiftAmount, inputPhrase){
  var alphabetChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericalChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var currentChar; //step through input phrase one character at a time, storing current character here.
  var encodedChar;  //after the shift has been applied to currentChar, encodedChar is the output.
  var encodedPhrase = ""; //all encodedChars will be stored here and this will be the final encoded phrase to be returned.

  for (var i = 0; i < inputPhrase.length; i++){ 
    currentChar = inputPhrase.charAt(i); 
    if(numericalChars.indexOf(currentChar) >= 0){  //if current char is a number...
      //encode char by calling encodeOneCharacter function with shift amount, current char and array it belongs to.
      encodedChar = encodeOneCharacter(shiftAmount, currentChar, numericalChars);  
    } else if(alphabetChars.indexOf(currentChar) >=0){  //if it's a letter, do the same with alphabetChars array.
      encodedChar = encodeOneCharacter(shiftAmount, currentChar, alphabetChars);
    } else { //if current character isn't in either array, pass it through unchanged.
      encodedChar = currentChar;
    }
    encodedPhrase += encodedChar; //add encoded char it to the encoded phrase.
  }

  return encodedPhrase;
}

var encodeOneCharacter = function(shiftAmount, inputChar, searchCharacters){
  var encodedChar; 

  var currentCharIndex = searchCharacters.indexOf(inputChar); //store input character's index from searchCharacters array (numerical or alphabetical)

  if(currentCharIndex === -1){
    alert("Error. Invalid characters.");
    return "Character Error";
    //this should never happen. only happens if the input char is not in the given array. But this function should only be called if the character is in the given array. 
  } else {

    while(currentCharIndex + shiftAmount >= searchCharacters.length){ //while the sum of the current index and shift amount is out of range
      //decrement shift amount and increment the current char by 1, looping until shift amount is decremented enough to be in range.
      shiftAmount--; 
      if(currentCharIndex < searchCharacters.length-1){ //if the next array index is not out of range...         
        currentCharIndex++; //increment the current char index by 1
      } else {
        currentCharIndex = 0; //else reset to 0 index (first character in array).
      }
    }
    encodedChar = searchCharacters[currentCharIndex + shiftAmount]; //get the encoded char by applying the new shift amount to the array.

    return encodedChar;

  }
}

$(document).ready(function() {
  $("form#code").submit(function(event) {
    event.preventDefault();
    var inPhrase = $("input#input-phrase").val();
    var shiftAmount = $("input#shift-amount").val();
    if(inPhrase === ""){
      $(".result").hide();
      $(".error p").text("You must enter a phrase.");
      $(".error").fadeIn();
    } else if (shiftAmount < 0){
      $(".result").hide();
      $(".error p").text("No negative numbers allowed.");
      $(".error").fadeIn();      
    } else {      
      var codedPhrase = shiftCipher(shiftAmount, inPhrase);
      $(".result p").text(codedPhrase);
      $(".error").hide();
      $(".result").fadeIn();
    }
  });
});