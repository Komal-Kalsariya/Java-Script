import getData from "../API/get.js";
//import display from "../components/UiMaker.js";
import navBar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navBar()

const display = (data,id) => {
    
    document.getElementById(id).innerHTML = ""
    data.map((ele,index) => {

        let th=document.createElement("td")
        th.innerHTML=index+1
        let title = document.createElement("td")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("td")
        price.innerHTML = ele.price

        let Category = document.createElement("td")
        Category.innerHTML =ele.Category

        let td=document.createElement("td")
        td.innerHTML=ele.qnt
        let btn=document.createElement("button")
        btn.innerHTML="BUY"
        btn.addEventListener("click",()=>{
           // postData("http://localhost:3000/cart",ele)
           isExitCart({...ele,qnt:1})
        })
        let btn1=document.createElement("button")
        btn1.innerHTML="DELETE"
        let tr = document.createElement("tr")
        tr.append(th,img,title, price, Category,td)
        // div.setAttribute("class", "box1")
        // title.setAttribute("class", "title")
        img.setAttribute("class", "imag")
        // price.setAttribute("class", "price")
        // btn.setAttribute("class", "btn  btn-warning")
        //  btn1.setAttribute("class", "btn btn-info ms-2")
        document.getElementById(id).append(tr)



    })

    

}
const get=async()=>{

   let data=await getData("http://localhost:3000/cart")
    display(data,"tbody")
}
get()