/* Write programs to print the following pattern for an input n = 5 :
a.

*
* *
* * *
* * * *
* * * * *

*/

let n = 5;

let row = 1;
while(row <= n){
    let col = 1;
    while(col <= row ){
        process.stdout.write("* ");
        col+=1;
    }
    process.stdout.write("\n")
    row+=1;
}