import navBar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navBar()


const isExit=(user)=>{
    fetch(`http://localhost:3000/user?email=${user.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length==0){
            alert("user not found")
        }
        else{
            alert("email and password wrong")
        }
        
    })
}

const validUser=(user)=>{
    fetch(`http://localhost:3000/user?email=${user.email}&password=${user.password}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length==1){
            alert("login sucessful...")
        }
        else{
            isExit(user)
        }
    })
}

const login=(e)=>{
    e.preventDefault()

    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
  
    validUser(user)
}
document.getElementById("data").addEventListener("submit",login)