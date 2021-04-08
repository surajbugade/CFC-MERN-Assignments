/* Question 4.
Write a program to print even numbers after odd times jump.
E.g: 2, 6, 14, 26, …
*/

let num = 47;

let even = 2;
let j = 1;

while (even<=num) {
    console.log(even);
    even+=(2*(j+1)); // skipping even nums odd times
    j+=2; //for odd nums
}
