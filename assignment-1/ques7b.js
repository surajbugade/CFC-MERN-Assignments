/* Write programs to print the following pattern for an input n = 5 :
b. 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/


let n = 5;

let row = 1;
while(row <= n){
    let col = 1;
    while(col <= row ){
        process.stdout.write(col.toString()+" ");
        col+=1;
    }
    process.stdout.write("\n")
    row+=1;
}