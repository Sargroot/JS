let max=10;
let min=-10;
num = Math.floor(Math.random() * (max - min + 1) + min);
function hello1(num){
 if(num === 0){
     console.log("The given number is zero : "+num+" ");
 }

 else if(num >= 0){
     console.log("The given number is Positive : "+num+" ");
 }
 else{
    console.log("The given number is Negative : "+num+" ");
 }

}


min=1;
max=10;
num1 = Math.floor(Math.random() * (max - min + 1) + min);
function hello2(num1){
switch (num1){
    case 1:
        console.log("even");
        break;
    case 2:
        console.log("Odd");
        break;
    default :
        console.log("Not Found");
}

}

hello2(num1);
hello1(num);
