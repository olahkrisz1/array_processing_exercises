// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array. For instance:

// JAVASCRIPT
// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)

function filterRange(arr, a, b) {
  // Create a new array to hold the filtered values
  let result = [];

  // Iterate over the array and add values that are between a and b to the result array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }

  // Return the result array
  return result;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)

//   Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// JAVASCRIPT
// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = /* ... your code */

// alert( names ) // John, Pete, Mary

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);

alert(names); // John, Pete, Mary

// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// JAVASCRIPT
// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28

let johnX = { name: "John", age: 25 };
let peteX = { name: "Pete", age: 30 };
let maryX = { name: "Mary", age: 29 };

let arrX = [johnX, peteX, maryX];

function getAverageAge(users) {
  let sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
  return sumOfAges / users.length;
}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
