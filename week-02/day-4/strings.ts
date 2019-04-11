//Given a string, compute recursively (no loops) a new string 
// where all the lowercase 'x' chars have been changed to 'y' chars.


function xToY(myString:string):string {
    if(myString.indexOf("x") === -1) return myString;
    return xToY(myString.replace("x", "X"));
}
console.log(xToY("xAdXsdx"));

