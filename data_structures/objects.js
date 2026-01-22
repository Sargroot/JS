console.log("=====Keys=====");

const keyPair = {
    a:"one",
    b:"two",
    c:"three",
    d:"four"
};

console.log(Object.keys(keyPair));
console.log(keyPair.b);

const keyPair1 = ["a","b","c","d"];
console.log(Object.keys(keyPair1));

const word = "hello";
console.log(Object.keys(word));


console.log("=====Values======");

const keyPair2 = {
    a:"one",
    b:"two",
    c:"three",
    d:"four"
};

console.log(Object.values(keyPair2));

const keyPair3 = ["a","b","c","d"];
console.log(Object.values(keyPair3));
console.log(keyPair3.toString());


const word1 = "hello";
console.log(Object.values(word));


console.log("=====Methods=====");

let _a = keyPair2;
console.log(_a.a);

console.log(keyPair2.a);
console.log(keyPair2["a"]);

const hello = {
    fname:"Saravanane",
    lname:"T",
    age:21,
    city:"Pondy",
    fullname: function(){
        return this.fname +" "+this.lname;
    }
};

console.log(hello.fullname());
console.log(hello.fname);
console.log(hello.lname);

const hell = {
    fname:"Saravanane",
    lname:"T",
    age:21,
    city:"Pondy",
    
};



let text = "";
for(let x in hell){
    text += hell[x]+" ";
    console.log(text);
}
console.log(text);
