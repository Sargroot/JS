console.log("======arrays======");

let arr1 = [1,2,3,4,5,6];
console.log(arr1[2]);

let arr2 = ["one","two","three"];
let [o,t,h] = arr2;
console.log(t);

let mat1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(mat1[2][0]);

let lib1 = {
    name:"saravanane",
    age:21,
    city:"Pondy",
    language:{
        known1:"Tamil",
        known2:"English"
    }
}
console.log(lib1.name);
console.log(lib1.age);
console.log(lib1.city);
console.log(lib1);
console.log(lib1.language.known1);
console.log(lib1.language.known2);

const combine = [...arr1,...arr2];
console.log(combine);


console.log("=======array methods=======");
console.log("========using pop push unshift shift function======== ");

let arr3 = ["one","two","three","four"];
console.log(arr3);
console.log(arr3.pop()+" is poped ");
console.log(arr3);
arr3.push("five","six"+" is pushed ");
console.log(arr3);

arr3.unshift("zero");
console.log(arr3+" is unshifted ");

arr3.shift();
console.log(arr3+" using shift ");

console.log("========using map function======== ");
let arr4 = [1,2,3,4,5,6];
let ans = arr4.map(n=>n*10);
console.log(ans);

console.log("========using filter function======== ");
ans = arr4.filter(n=>n<=3);
console.log(ans); 

console.log("========using reduce function======== ");
ans = arr4.reduce((t,c)=>t+c);
console.log(ans);

console.log("========using for each function======== ");
ans = arr4.forEach(x => console.log(`hello : ${x}`));


console.log("======== Search methods find() includes()======== ");
let lib2 = [{
    name:"saravanane",
    age:21,
    city:"Pondy",
    language:{
        known1:"Tamil",
        known2:"English"
    }
},{
    name:"Saro",
    age:20,
    city:"chennai",
    language:{
        known1:"Tamil",
        known2:"french"
    }
}
]

let sol = lib2.find(n => n.language.known2=="french");
console.log(sol);


sol = arr4.includes(4);
console.log(sol);


sol = arr4.includes("one");
console.log(sol);



console.log("======== Manipulation methods slice() splice()======== ");

let ltr = ["a","b","c","d"];
let pec = ltr.slice(0,3);
console.log(pec);

ltr.splice(0,3,"ffff","gggg");
console.log(ltr);


console.log("======== sorting() joining()======== ");
let num = [5,3,7,7,2,9,1];

console.log(num.sort());
console.log(num.reverse());



let wrd = ["a","s","d","f","s","h"];
console.log(wrd.join("+"));
console.log(wrd.indexOf("s"));
console.log(wrd.lastIndexOf("s"));


let nu = [ [1,2],[3,4],[3]];
console.log(nu.flat());


let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);
points.sort(function(a, b){return b - a});
console.log(points);
