describe("shiftCipher", function(){ //main function
  it("Takes a one-letter phrase and a shift amount of 0 and outputs the same one-letter phrase.", function(){
    shiftCipher(0, "a").should.equal("a");
  });
  it("Takes a one-letter phrase and a shift amount of 1 and outputs the encoded one-letter phrase.", function(){
    shiftCipher(1, "a").should.equal("b");
  });
  it("Takes a two-letter phrase and a shift amount of 0 and outputs the encoded multi-letter phrase (unchanged).", function(){
    shiftCipher(0, "ab").should.equal("ab");
  });
  it("Takes a two-letter phrase and a shift amount of 1 and outputs the encoded multi-letter phrase.", function(){
    shiftCipher(1, "ab").should.equal("bc");
  });
  it("Takes a multi-word phrase and a shift amount of 0 and outputs the encoded phrase (unchanged).", function(){
    shiftCipher(0, "ab cd").should.equal("ab cd");
  });
  it("Takes a multi-word phrase and a shift amount of 1 and outputs the encoded phrase.", function(){
    shiftCipher(1, "ab cd").should.equal("bc de");
  });
  it("Takes a number as the input phrase and a shift amount of 0 and outputs the encoded number.", function(){
    shiftCipher(0, "3").should.equal("3");
  });
  it("Takes a number as the input phrase and a shift amount of 1 and outputs the encoded number.", function(){
    shiftCipher(1, "3").should.equal("4");
  });
  it("Takes numbers and characters as a one-word phrase and a shift amount of 1 and outputs the encoded one-word phrase.", function(){
    shiftCipher(1, "3a").should.equal("4b");
  });
  it("Takes one word with numbers and one with characters as the input phrase and a shift amount of 1 and outputs the encoded phrase.", function(){
    shiftCipher(1, "33 aa").should.equal("44 bb");
  });
  it("Takes numbers and characters as the multi-word input phrase and a shift amount of 1 and outputs the encoded phrase.", function(){
    shiftCipher(1, "3a 4b").should.equal("4b 5c");
  });
  it("Takes numbers, alphabetical and special characters as the multi-word input phrase and a shift amount of 1, and outputs the encoded phrase with special characters unchanged.", function(){
  	shiftCipher(1, "3#a 4#b").should.equal("4#b 5#c");
  });
  it("Takes a letter at the end of the alphabet and shifts it by 1 so that it cycles back to the beginning of the alphabet.", function(){
  	shiftCipher(1, "z").should.equal("a");
  });
  it("Takes a number at the end of the list of 9 digits and shifts it by 1 so that it cycles back to 0.", function(){
  	shiftCipher(1, "9").should.equal("0");
  })
  it("Takes a full phrase with letters, numbers, and special characters, then encodes it with the given shift amount.", function(){
  	shiftCipher(3, "once upon a time ?!?!?! 789").should.equal("rqfh xsrq d wlph ?!?!?! 012");
  })
});

describe("encodeOneCharacter", function(){
it("Takes a character, an array and a shift amount, then outputs the encoded single character.", function(){
	encodeOneCharacter(1, "z", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]).should.equal("a");	
})
it("Takes a number, an array and a shift amount, then outputs the encoded single character.", function(){
	encodeOneCharacter(1, "9", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]).should.equal("0");
})
})
