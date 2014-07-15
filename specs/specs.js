describe("shiftCipher", function(){
  it("Takes a one-letter phrase and a shift amount of 0 and outputs the same phrase.", function(){
    shiftCipher(0, "a").should.equal("a");
  });
  it("Takes a one-letter phrase and a shift amount of 1 and outputs the encoded one-letter phrase.", function(){
    shiftCipher(1, "a").should.equal("b");
  });
});
