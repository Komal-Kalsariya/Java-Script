let logins=JSON.parse(localStorage.getItem("signup"))||[]
console.log(logins)
const login=(e)=>{
    e.preventDefault();

  let data={
 
    email:document.getElementById("email").value,
     pass:document.getElementById("pass").value
 
  }
 let newuser=logins.filter((ele)=>ele.email==data.email && ele.pass==data.pass)
 if(newuser.length==1){
    alert( "Logged in Successfully")
    window.location.href="/index.html"
}
else{
    window.location.href="/pages/signup.html"
}


}
document.getElementById("data").addEventListener("submit",login)