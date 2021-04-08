/* Write programs to print the following pattern for an input n = 5 :
d. 
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5

*/


let n = 5;
let row = 1;
let mid = n;
while(row <= n){
    let col = 1;
    let x = row;
    while(col < 2 * n ){
        if(col > (mid-row) && col < (mid+row)){
            if(col < n){
                process.stdout.write(x.toString()+" ");
                x++;
            }
            else{
                process.stdout.write(x.toString()+" ");
                x--;
            }
        }
        else{
            process.stdout.write("  ");
        }
        col+=1;
    }
    process.stdout.write("\n");
    row+=1;
}