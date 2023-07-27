var actualRetailPrice = 15347;
var contestantNumber1Guess = 2233;
var contestantNumber2Guess = 20336;
var contestantNumber3Guess = 123;
var contestantNumber4Guess = 15347;
if (contestantNumber1Guess > actualRetailPrice) {
    console.log("Contestant Number 1" + contestantNumber1Guess + " is OVER!" + actualRetailPrice);
}
else {
    console.log("Contestant number one is under");
}
if (contestantNumber2Guess > actualRetailPrice) {
    console.log("Contestant Number 2 is OVER!");
}
else {
    console.log("Contestant number two is under");
}
if (contestantNumber3Guess > actualRetailPrice) {
    console.log("Contestant Number 3 is OVER!");
}
else {
    console.log("Contestant number Three is under");
}
if (contestantNumber4Guess > actualRetailPrice) {
    console.log("Contestant Number 4" + contestantNumber4Guess + "is OVER!" + actualRetailPrice);
}
else if (contestantNumber4Guess < actualRetailPrice) {
    console.log("Contestant number Four is under");
}
else {
    console.log("Contestant number Four" + contestantNumber4Guess + "is EQUAL" + actualRetailPrice);
}
