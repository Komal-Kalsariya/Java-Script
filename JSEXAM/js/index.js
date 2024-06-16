import getData from "../API/get.js";
import navBar from "../component/navbar.js";
import Display from "../component/uimaker.js";

document.getElementById("navbar").innerHTML=navBar()


const get=async()=>{
let data=await getData("http://localhost:3000/questions")
Display(data,"box")

}
get()