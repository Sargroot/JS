function one(a,b){
    let o = Number(a)+Number(b);
    console.log(o);
}
one("5","9");
one(2,3);

let two = function (a1,a2) {
    return a1*a2;
}
let ans = two(3,4);
console.log(ans);

const x = function(a,b){return a*b}
let z = x(4,4);
console.log(z);

const y =new Function("a","b"," return a+b ");
let an = y(12,12);
console.log(an);

const myfunc = Function("a","b", "return a*b");
let an1 = myfunc(4,3);
console.log(an1);