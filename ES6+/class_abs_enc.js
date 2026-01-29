function one(){
    let c=0;
    return {
    say : function(){
        c=c+1;
        console.log(c);
    }
};

}

let aa = new one();
aa.say();
aa.say();


const hello = {
    word:"one",
    say : function(){
        console.log("Hello code");
    }
};

hello.say();



class welcome{
    #key;
    constructor(w){
        this.#key=w;
    }
    depo(a){
        this.#key += a;
        console.log(`${a}`);
    }
    res(){
        return this.#key;
    }
}
const am = new welcome(1000);
am.depo(500);
console.log(am.res());



console.log("Encapsulation");



function bank(accno,holdername,balance){
    let _accno = accno;
    let _holdername = holdername;
    let _balance = balance;

    function display(){
        console.log("Account number :"+_accno);
        console.log("Holder Name :"+_holdername);
        console.log("Balance :"+_balance);
    }

    function deposit(amount){
        _balance += amount;
        display();

    }

    function withdraw(amount){
        if(_balance>=amount){
            _balance -= amount;
            display();
        }
        else{
            console.log("insufficient balance");
        }
    }

    return{
        deposit:deposit,withdraw:withdraw,display:display
    };

}
let o = new bank(2222,"saro",2000);
o.deposit(500);



