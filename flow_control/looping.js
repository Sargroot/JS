let alp = ['a','b','c','d','e'];

console.log("===========for==========")

for(let i=0;i<alp.length;i++){
    console.log("The element is(for loop) : "+alp[i]);
}

console.log("===========while==========")

i=0;
while(alp[i]){
    console.log("The element is(while loop) : "+alp[i]);
    i++;
}

console.log("===========Reversed array==========")

let rev = "";
for(let j=alp.length-1;j>=0;j--){
    rev+=alp[j];
}
j=0;

while(rev[j]){
    console.log(rev[j]);
    j++;
}

console.log("===========do...whiile==========")

n=0
do{
console.log(n);
n++;
}while(n<=10)


console.log("===========for...of==========")
for(const c  of alp){
    console.log("THE "+c);
}
for(const c  of rev){
    console.log("THE "+c);
}