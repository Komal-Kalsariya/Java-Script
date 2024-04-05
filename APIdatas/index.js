

const dispaly=(data)=>{
    document.getElementById("data").innerHTML=""
    data.map((ele)=>{
    let API=document.createElement("h2")
    API.innerHTML="API:"+ele.API

    let Description=document.createElement("p")
    Description.innerHTML="Des:"+ele.Description

    let Auth=document.createElement("p")
    Auth.innerHTML="Auth:"+ele.Auth

    let Category=document.createElement("p")
    Category.innerHTML="Category:"+ele.Category+"<hr>"
    document.getElementById("data").append(API,Description,Auth,Category)
    })
}




const getdata= async()=>{
   
    let res=await fetch("https://api.publicapis.org/entries")
    let data=await res.json()
    dispaly(data.entries)
}   
document.getElementById("btn").addEventListener("click",()=>{
    getdata()
})