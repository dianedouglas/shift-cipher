describe("shiftCipher", function(){
  it("Takes a one-letter phrase and a shift amount of 0 and outputs the same phrase.", function(){
    shiftCipher(0, "a").should.equal("a");
  });
  it("Takes a one-letter phrase and a shift amount of 1 and outputs the encoded one-letter phrase.", function(){
    shiftCipher(1, "a").should.equal("b");
  });
  it("Takes a two-letter phrase and a shift amount of 0 and outputs the encoded multi-letter phrase.", function(){
    shiftCipher(0, "ab").should.equal("ab");
  });
  it("Takes a two-letter phrase and a shift amount of 1 and outputs the encoded multi-letter phrase.", function(){
    shiftCipher(1, "ab").should.equal("bc");
  });
  it("Takes a multi-word phrase and a shift amount of 0 and outputs the encoded phrase.", function(){
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
  it("Takes numbers and characters as the 1-word-input phrase and a shift amount of 1 and outputs the encoded number.", function(){
    shiftCipher(1, "3a").should.equal("4b");
  });
  it("Takes one word with numbers and one with characters as the input phrase and a shift amount of 1 and outputs the encoded phrase.", function(){
    shiftCipher(1, "33 aa").should.equal("44 bb");
  });
  it("Takes numbers and characters as the input phrase and a shift amount of 1 and outputs the encoded number.", function(){
    shiftCipher(1, "3a 4b").should.equal("4b 5c");
  });
  it("Takes numbers, alphabetical and special characters as the multi-word input phrase and a shift amount of 1, and outputs the encoded phrase with special characters unchanged.", function(){
  	shiftCipher(1, "3#a 4#b").should.equal("4#b 5#c");
  })
});
