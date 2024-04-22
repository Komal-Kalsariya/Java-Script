
import getData from "../API/get.js";
import display from "../components/UiMaker.js";

import navBar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navBar()

const get=async()=>{
    let data=await getData("http://localhost:3000/product")
  
    display(data,"box")
    console.log(data)
    
}
get()

