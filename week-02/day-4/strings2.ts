//Given a string, compute recursively a new string where all
// the 'x' chars have been removed.

function xToY(myString:string):string {
    if(myString.indexOf("x") === -1) return myString;
    return xToY(myString.replace("x", ""));
}
console.log(xToY("xAdXsdx"));
