// console.log("=====spread operator=====");

// let a = [1,2,6];
// let b = [...a,11,22,33];
// console.log(b);

// const orginal = [10,20,30,40,50];
// const clone = [...orginal];
// console.log(clone);

// let ob1 = {a:"one",b:"two"};
// let ob2 = {c:"three",d:"four"};
// let ob3 = {...ob1,a:"five",c:"tttt"};
// // let com = {...ob1,...ob2};
// console.log(ob3);


// console.log("=====Rest Parameter=====");

// function hello(greet,...h){
//     console.log(`${greet} ${h}`);
// }
// hello("hello","saro1","saro2");


// const {aa, ...other} = {aa:1,bb:2,cc:3};
// console.log(aa);
// console.log(other);


// const {a1, ...a2} = [1,2,3,4,5,6];


// function hello2(one, ...two){
//     return two.map(x => x*one);
// }

// console.log(hello2(2,1,2,3,4,5,6));



// console.log("======Destructuring======");

// const arr = [10,20,30,40];
// const [x,y] = arr;
// console.log(x);
// console.log(y);

// const [p, , ,s] = arr;
// console.log(p);
// console.log(s);

// ({o, l, ...hell}={o: 1,l: 2,x: 3,y: 4});
// console.log(o);
// console.log(l);
// console.log(hell);


// const product = {
//   id: 101,
//   title: "Mobile",
//   price: 15000
// };
 
// const { title, price } = product;
 
// console.log(title); // Mobile
// console.log(price);

const user = {name:"saro",age:22};

function printUser({name,age}) {
  console.log(name);
  console.log(age);
}

printUser(user);