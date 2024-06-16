import DeleteData from "../API/delete.js";
import getData from "../API/get.js";
import upadateData from "../API/patch.js";
//import display from "../components/UiMaker.js";
import navBar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navBar()


const handleqntity=(opr,data)=>{
    if(opr=="+"){
        data.qnt+=1
        upadateData(data)
    }
    else{
        if(data.qnt>=2){
         data.qnt-=1
        upadateData(data)
        }
     else{
        DeleteData(data.id)
    }
}
}
let total=0
const display = (data,id) => {
    
    document.getElementById(id).innerHTML = ""
    data.map((ele,index) => {
        total+=ele.price*ele.qnt
        let th=document.createElement("td")
        th.innerHTML=index+1
        let title = document.createElement("td")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let td1=document.createElement("td")
        td1.append(img)
        let price = document.createElement("td")
        price.innerHTML = ele.price

        let Category = document.createElement("td")
        Category.innerHTML =ele.Category

      
        let btn1=document.createElement("td")
        btn1.innerHTML="DELETE"
        // let td3=document.createElement("td")
        // td3.append(bnt1)
        btn1.addEventListener("click",()=>{
            DeleteData(ele.id)
        })
        let btn2=document.createElement("button")
        btn2.innerHTML="-"
      
        let td=document.createElement("button")
        td.innerHTML=ele.qnt
        let btn3=document.createElement("button")
        btn3.innerHTML="+"

        btn2.addEventListener("click",()=>handleqntity("-",ele))
        btn3.addEventListener("click",()=>handleqntity("+",ele))
        let td2=document.createElement("td")
        td2.append(btn2,td,btn3)
       
        let tr = document.createElement("tr")
        tr.append(th,td1,title, price, Category,td2,btn1)
      
        img.setAttribute("class", "imag")
        document.getElementById(id).append(tr)



    })
    let btn1=document.createElement("button")
    btn1.innerHTML="checkout"
    let p=document.createElement("p")
    p.innerHTML=total
document.getElementById("checkout").append(p,btn1)
    

}
const get=async()=>{

   let data=await getData("http://localhost:3000/cart")
    display(data,"tbody")
}
get()