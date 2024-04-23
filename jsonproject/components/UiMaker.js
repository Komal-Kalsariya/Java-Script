import upadateData from "../API/patch.js"
import postData from "../API/post.js"
const isExitCart=(data)=>{
    fetch(`http://localhost:3000/cart/${data.id}`)
    .then((res)=>res.json())
    .then((res)=>{
        res.qnt+=1
        upadateData(res)
    })
    .catch((error)=>{
        console.log("error create cart")
        postData("http://localhost:3000/cart",data)
    })
}

const display = (data,id) => {
    
    document.getElementById(id).innerHTML = ""
    data.map((ele) => {

        
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("price")
        price.innerHTML = "Price:" + ele.price

        let Category = document.createElement("p")
        Category.innerHTML ="Category:" + ele.Category

        let btn=document.createElement("button")
        btn.innerHTML="BUY"
        btn.addEventListener("click",()=>{
           // postData("http://localhost:3000/cart",ele)
           isExitCart({...ele,qnt:1})
        })
        let btn1=document.createElement("button")
        btn1.innerHTML="DELETE"
        let div = document.createElement("div")
        div.append(img,title, price, Category,btn,btn1)
        div.setAttribute("class", "box1")
        // title.setAttribute("class", "title")
        img.setAttribute("class", "imag1")
        // price.setAttribute("class", "price")
        btn.setAttribute("class", "btn  btn-warning")
         btn1.setAttribute("class", "btn btn-info ms-2")
        document.getElementById(id).append(div)



    })

    

}
export default display