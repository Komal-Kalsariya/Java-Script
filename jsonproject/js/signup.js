import postData from "../API/post.js";
import navBar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navBar()

const isExit=(data)=>{
    fetch(`http://localhost:3000/user?email=${data.email}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length==0){
            postData("http://localhost:3000/user",data)
            // console.log(data)
        }
        else{
            alert("Already exit....")
        }
    })
}

const signUp=(e)=>{
    e.preventDefault()

    let data={
        user:document.getElementById("user").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    console.log(data);
 isExit(data)
}
document.getElementById("data").addEventListener("submit",signUp)