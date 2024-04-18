import navBar from "../components/navbar.js";

document.getElementById("box").innerHTML=navBar()

const postData=(data)=>{
    fetch("http://localhost:3000/user",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })
}
const isExit=(email)=>{
    fetch(`http://localhost:3000/user?email=${email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length==0){
            return true
        }
        else{
            return false
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
    if(isExit(data.email)==true){
        postData(data)
    }
    else{
        alert("user email already exits....")
    }
}
document.getElementById("data").addEventListener("submit",signUp)