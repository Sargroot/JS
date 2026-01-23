const a = new Set(["a","b","c"]);
console.log(a.size);    

const b = new Set();
b.add("a");
b.add("b");
b.add("C");
console.log(b);


const c = new Set();
let a1 = "h";
let a2 = "he";
c.add(a1);
c.add(a2);        
console.log(c); 


const ltr = new Set([["hello ","Every","one"]])
text ="";
for(const x of ltr){
    text+=x;
}

console.log(text);



console.log("=====Map======");

const fruits = new Map();

fruits.set("apple",500);
fruits.set("banana",350);
fruits.set("grapes",200);

let val = fruits.get("apple");
let val1 = fruits.get("banana");
console.log(val);
console.log(val1);