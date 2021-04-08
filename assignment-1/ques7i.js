/* Write programs to print the following pattern for an input n = 5 :
i.

5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5
5 4 3 2 1 2 3 4 5
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5
5 4 4 4 4 4 4 4 5
5 5 5 5 5 5 5 5 5

*/

let n = 5;
size = 2 * n - 1;
let row = 0;
let row_mirr = 0;
while (row_mirr < size) {
    let col = 0;
    let col_mirr = 0;
    let num = n;
    
    while (col_mirr < size) {
        process.stdout.write(num + " ")
        if (col_mirr >= size - row -1) {
            num+=1;
        }
        else if(col < row){
            num -= 1 ;
        }
        // mirroring rows
        if(col_mirr < n-1){
            col+=1;
        } else {
            col-=1;
        }
        
        col_mirr += 1;  
    }
    process.stdout.write("\n");
    // mirroring rows
    if (row_mirr < n-1) {
        row+=1;       
    } else {
        row-=1;
    }
    
    row_mirr+=1;
}