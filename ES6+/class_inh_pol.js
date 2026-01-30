class animal{
        speak(){
            console.log("animal makes sound");
        }
}
class dog extends animal{
    speak(){
        console.log("dog makes sound");
    }
}
class cat extends animal{
    speak(){
        console.log("cat makes sound");
    }
}

const dg = new dog();
const ct = new cat();
dg.speak();
ct.speak();


class sum{
    add(a,b){
        if(b==undefined){
            return a;
        }
        return a+b;
    }
}
let oo = new sum();
console.log(oo.add(10));
console.log(oo.add(20,30));



class car{
    constructor(name){
        this.Cname = name;
    }

    op1(){
        return `the op is : `+this.Cname;
    }
}

class bike extends car{
    constructor(name,model){
        super(name);
        this.cmodel=model;
    }
    op2(){
        return `the op is :`+ this.cmodel +` and `+ this.op1();
    }
}

const he = new bike("bmw","s3");
console.log(he.op2());