// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function createMatrix(sizeOfMatrix:number):void {
    let matrix:number[][] = [];
    for (let i:number=0; i<sizeOfMatrix; i++){
        matrix[i] = [];
        for (let j:number=0; j<sizeOfMatrix; j++){
            matrix[i][j] = j === (sizeOfMatrix-i-1) ? 1 : 0;
        }
        console.log(matrix[i]);
    }
}
createMatrix(4);
