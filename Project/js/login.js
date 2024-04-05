let logins=JSON.parse(localStorage.getItem("datas"))||[]
const login=(e)=>{
    e.preventDefault();
    

    let mails=document.getElementById("mails").value
    let passd=document.getElementById("pwd").value
  

 let loginuser=logins.filter((ele)=>ele.mail==mails && ele.pass==passd)
 console.log(loginuser)
 if(loginuser.length==1){
 
  alert("login suceefull")
  window.location.href="/project/index.html"
  localStorage.setItem("islogin",true)


 }
 else{

    window.location.href="/Project/pages/signup.html"
 }


}
document.getElementById("data").addEventListener("submit",login)

let islogins=localStorage.getItem("islogin")||false

if(islogins){
  document.getElementById("login-id").innerHTML="Logout"
}