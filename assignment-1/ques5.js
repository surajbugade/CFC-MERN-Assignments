/* Question 5.
Write a program to count the number of digits in a number.
*/

let num = 235;
console.log("Number = " + num);

let count = 0;
let n = num;

while (n > 1) {
  count++;
  n = n / 10;
}

console.log("The number of digits in " + num + " is: " + count);
