class calculator{
    constructor(a,b,result){
        this.a=a;
        this.b=b;
        this.result=result;
    }
    setcleareresult(){
        console.clear();

    }
    getResult(result){
        this.result=result;
        console.log(this.result);
        
     }

   
    add(a,b,result){
        result=a+b;
        this.getResult(result)
      
    }
    Sub(a,b,result){
        result=a-b;
        this.getResult(result)
       
    }
    mult(a,b,result){
        result=a*b;
        this.getResult(result)
    }
    divide(a,b,result){
        result=a/b;
        this.getResult(result)
    }
   

}

class  calculators extends calculator{
    constructor(a,b,c,result){
        super(a,b,result)
            this.c=c;
    }
    add(a,b,c,result){
        result=a+b+c;
        this.getResult(result)
    }
    sub(a,b,c,result){
        result=a-b-c;
        this.getResult(result)
    }
    mult(a,b,c,result){
        result=a*b*c;
        this.getResult(result)
    }
    devide(a,b,c,result){
        result=a/b/c;
        this.getResult(result)
    }
}

class calculat extends calculators{
    constructor(a,result){
        super(a,result)
        this.a=a
    }
    add(a){
        for(let i=0;i<this.a.length;i++){
            this.result+=a[i]
        }
        this.getResult()
    }
}

let cal=new calculator();
cal.add(2,5);
cal.Sub(5,2);
cal.mult(5,2);
cal.divide(10,2);

let cals=new calculators();
cals.add(2,3,4);
cals.sub(7,2,1);
cals.mult(6,2,1);
cals.devide(5,2,1)

let cla1=new calculat()
cla1.add([1,2,3,3,4])