
//Find the greatest common divisor of two numbers using recursion.

function gcd(num1:number, num2:number):number {
    if(num1%num2 == 0) return num2;
    return gcd(num2, num1%num2);
}
console.log(gcd(252,105));
