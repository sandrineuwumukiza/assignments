const string="now we are learning javascript";
const result = string.split("").reverse().join("");
console.log(result);

let n=[3,5,6,7,10,11,19,20,33]
let solution = n.filter(num=>num>10);
console.log(solution);

const str = "I like this program very much";
const output = str.split(" ").reverse().join(" .");
console.log(output);

const str = "Hello world";
const result = str.split(" ").reverse().join(" .");
console.log(result);

function isPolindrome(str){
    str=str.toLowerCase().replace(/[^a-z 0-9]/g,'');
    return str=str.toLowerCase().reverse().join(" ");
 }
 console.log(isPolindrome('radar'));
 console.log(isPolindrome('level'));
 console.log(isPolindrome('12321'));
 console.log(isPolindrome('tomorrow'));
