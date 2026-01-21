const add = (a,b) => {
    return a*b;
}

console.log(add(2,2));

const sub = (a,b)=>{
    return a-b;
}

console.log(sub(1000,989));

let a = () => "hello";
console.log(a());

let c = (a) => "hello "+ a;
console.log(c("one"));

let cc = a => "hello "+ a;
console.log(cc("one"));

const square = x => x*x ;
console.log(square(5));

const tri = (x,y,z) =>{
    console.log(x+y+z);
}
tri(10,20,30);