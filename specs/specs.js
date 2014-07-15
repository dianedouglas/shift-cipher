describe("shiftCipher", function(){
  it("Takes a phrase and a shift amount of 0 and outputs the same phrase.", function(){
    shiftCipher(0, "a").should.equal("a");
  });
});
