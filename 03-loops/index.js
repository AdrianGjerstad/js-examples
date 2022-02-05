function sum(array) {
  let result = 0;

  // 3 clauses:
  // 1. Declare a variable named i and set it to 0.
  // 2. *Before* each iteration, check if i is less than the array's length, if
  //    so, run the next iteration.
  // 3. At the end of the iteration increment i using prefix ++ syntax.
  for (let i = 0; i < array.length; ++i) {
    result += array[i];
  }

  return result;
}

function main() {
  let myArray = [1, 2, 6, 24, 96];
  alert("The sum of the array is " + sum(myArray));
}

window.onload = main;

