/* Question 6.
Write a program to reverse a number (9735 -> 5379)
*/

let num = 9735;
let revNum = 0;

console.log("Original number : " + num);

while (num > 0) {
  revNum = revNum * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log("Reversed Number : " + revNum);