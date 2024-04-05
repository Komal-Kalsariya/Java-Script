
let product=JSON.parse(localStorage.getItem("product"))||[];
console.log(product)
const display=(data)=>{

   data.map((ele)=>{
    document.getElementById("box").innerHTML=""
    let title=document.createElement("h4")
    title.innerHTML=ele.title

    let img=document.createElement("img")
    img.src=ele.img
    let content=document.createElement("p")
    content.innerHTML=ele.content
    let country=document.createElement("p")
    country.innerHTML=ele.country

    let div=document.createElement("div")
    div.append(title,img,content,country)
    div.setAttribute("class","box1")

    document.getElementById("box").append(div)
   })
}
// display(product)
const dis=(val)=>{
    let temp=product.filter((ele)=>ele.title==val)
    display(temp)
}


const search=(e)=>{
    e.preventDefault();

    let val=document.getElementById("search").value
    search(val)
}

const handcontry=(val)=>{
    let temp=product.filter((ele)=>ele.country==val)
    display(temp)
}
document.getElementById("searchform").addEventListener("submit",search)
document.getElementById("India").addEventListener("click",()=>handcontry("India"))
document.getElementById("London").addEventListener("click",()=>handcontry("London"))
document.getElementById("America").addEventListener("click",()=>handcontry("America"))