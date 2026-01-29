class one{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    print(){
        console.log(`The name is :${this.name} and age is :${this.age}`);
    }
}

let a = new one("saravanane",21);
a.print();

console.log("============");

class hello{
    constructor(one,two){
        this.one=one;
        this.two=two;
    }

    output1(){
        console.log(`The first:${this.one} and second :${this.two}`);
    }
}

class hello1 extends hello{
    constructor(one,two,three,four){
        super(one,two)
        this.three=three;
        this.four=four;
    }
    output2(){
        console.log(`The third:${this.three} and fourth :${this.four}`);
    }
}

let p = new hello1("one","two","three","four");
p.output1();
p.output2();


console.log("============");


class first{
    constructor(one,two){
        this.one=one;
        this.two=two;
    }
    output(){
        console.log(this.one);
        console.log(this.two);
    }
}

let c1 = new first("hello","today");
let c2 = new first("welcome","now");

c1.output();
c2.output();