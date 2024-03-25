/*function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let n = random(1, 100);
*/
function fizzBuzz (n){
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return NaN;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}

