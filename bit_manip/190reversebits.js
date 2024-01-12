// Reverse bits of a given 32 bits unsigned integer.

// var reverseBits = function(n) {
//     let sum = 0;
//     for(let i = n.length - 1; i >= 0; i--){
//         sum += +n[i] * (2**i);
//     }
//     return sum;
// };

// var reverseBits = function(n) {
//     let result = "";
//     for(let i = n.length - 1; i >= 0; i--){
//         result += n[i];
//     }
//     return result;
// };

// var reverseBits = function(n) {
//     return n.split('').reverse().join('');
// }

const t = "00000010100101000001111010011100"
const expected = "00111001011110000010100101000000"

console.log(`result: ${reverseBits(t)} expected: ${expected}`);
console.log(t.length)
console.log(expected.length)
