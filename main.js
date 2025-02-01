// task 01_______________________/
// Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ["apel", "komola", "angur", "jam", "am"];
console.log(fruits)
console.log(fruits[3])
fruits[2]= "jambura";
console.log(fruits)










// task 2
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const turist = ["rangamati", "syleth", "coxbazar"]
turist.push("citagong", "sitakundo")
console.log(turist)
turist.pop()
console.log(turist)












// task 3___________________________________________________//
// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
const books = ["omuk boi", "tomuk boi", "vala boi", "poca boi", "javascript"];

const check = books.includes("javascript");

if (check) {
      console.log("Yes! The book list contains a JavaScript book.");
} else {
      console.log("No! The book list does not contain a JavaScript book.");
}











// task 4_______________________________//
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const name = "akash"
const isStudent = true;
const book = ["bangla", "emglish", "math", "pysich"]
const numbers = [43, 53,  3, 34, 32]

console.log(Array.isArray(name))
console.log(Array.isArray(isStudent))
console.log(Array.isArray(book))
console.log(Array.isArray(numbers))












// task 5_______________________________//
// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];

const result = num1.concat(num2).join("_");
console.log(result)

for(const i of result){
      console.log(i)
}

const combined = [...num1, ...num2];
console.log("Combined Array using Spread:", combined);
