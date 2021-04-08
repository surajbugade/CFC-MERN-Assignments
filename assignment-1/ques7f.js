/* Write programs to print the following pattern for an input n = 5 :
f.
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
  * * * * * * *   
    * * * * *
      * * *
        *
*/

let n = 5;

let row = 0;
let row_mirror = 0;
while(row_mirror < 2 * n - 1){
    let col = 0;
    let col_mirror = 0;
    while(col_mirror < 2 * n - 1) {
        if(col < n - row - 1){
            process.stdout.write("  ");
        } else {
            process.stdout.write("* ")
        }

        if(col_mirror < n-1){
            col+=1;
        } else {
            col-=1;
        }

        col_mirror+=1;
    }
    process.stdout.write("\n")
    
    if (row_mirror < n-1) {
        row+=1;       
    } else {
        row-=1;
    }

    row_mirror += 1;
}