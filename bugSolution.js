function add(a, b) {
  // Type checking before addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Invalid input: Both parameters must be numbers";
  }
}

console.log(add(1, 2)); // Output: 3
console.log(add(1, '2')); // Output: "Invalid input: Both parameters must be numbers"

// Alternative solution using parseInt
function addParseInt(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(addParseInt(1, '2')); //Output: 3
console.log(addParseInt('1','2')); //Output: 3