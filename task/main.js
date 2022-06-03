/*
Finboacci numbers - you should write a function which accepts n as a parameter and 
should return n-th Fibonacci number. (Fibonacci numbers: 0 1 1 2 3 5 8 13 21 34).
 if the input is 0 you should return 0, 
if the input is 2 you should return 1, if the input is 9 you should return 34.

*/

function fibonnaci(n) {
    if(n<2){
        return n;
    }
    return fibonnaci(n-1) + fibonnaci(n-2); 
}

console.log(fibonnaci(9));

