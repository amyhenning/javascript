// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

booWho(true); // should return true
booWho(false); // should return false
booWho(null); // should return false
booWho([1, 2, 3]); // should return false
booWho(NaN); // should return false
booWho("true"); // should return false