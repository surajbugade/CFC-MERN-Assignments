/* Question 3.
Write the pseudocode & the program to calculate GCD of two numbers.
*/

let num1 = 2;
let num2 = 5;

num1 = Math.abs(num1);
num2 = Math.abs(num2);

let i = num1 == 0 || num2 == 0 ? 0 : num1 < num2 ? num1 : num2;

while(i>=1){
    if(num1 % i == 0 && num2 % i == 0){
        break;
    }
    i--;
}

console.log("GCD of "+num1+" and "+num2+" is : "+i);