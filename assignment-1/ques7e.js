/* Write programs to print the following pattern for an input n = 5 :
e. 
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
*/

let n = 5;
let row = 0;

function fact(n) {
    facto = 1;
    for (let index = 1; index <= n; index++) {
        facto = facto * index;
    }
    return facto;
}

function nCr(n,r) {
    return fact(n) / (fact(r)*fact(n-r)) ;
}

while (row <= n) {
    let col = 0;
    while (col <= row) {
        process.stdout.write(nCr(row,col).toString()+" ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}