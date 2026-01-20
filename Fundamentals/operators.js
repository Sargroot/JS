console.log("Arithemetic Operator");
let a = 100;
let b =5;
let add = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let exp = b**2;
let mod = a%2;
let inc = ++a;
a = 100;
let dec = --a;
console.log(add+" "+sub+" "+mul+" "+div+" "+exp+" "+mod+" "+inc+" "+dec);

console.log("Assignment Operator");
a+=1;
console.log(a);
console.log("This includes = += -= *= /= **= %= ");
let x=10;
x**=2
console.log(x)
let r = 1234;
r%=10;
console.log(r);


console.log("Logical Operator");
console.log("Include && || !");
let s = 3;
if(s>0 && s<5){
    console.log("true")
}
if(s>0 || s<0){
    console.log("true")
}
if (!(s===0)){
    console.log("false")
}
else{
    console.log("true")
}


console.log("Conditional operator");
console.log("Include == === != !== >= <=");
let val1=5;
console.log(val1==5);
console.log(val1==8);
console.log(val1<=10);