
class employee{

    constructor(id,str,address,category,salary){
     this.id=id
     this.str=str
     this.address=address
     this.category=category
     this.salary=salary
 }
 setdata(){
     console.log(`My Id Number is:${id}`)
 }

}
class Manager extends employee{
 constructor(id,str,address,category,salary,leave){
     super(id,str,address,category,salary)
     this.leave=leave
    }
 }       

let emp=new Manager(1,"komal","surat","operator",20000,5)
console.log(emp)