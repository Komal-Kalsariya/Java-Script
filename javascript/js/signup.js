let signups=JSON.parse(localStorage.getItem("signup"))||[]

const signup=(e)=>{
    e.preventDefault();

  let data={
    user:document.getElementById("user").value,
    email:document.getElementById("email").value,
    country:document.getElementById("country").value,
    img:document.getElementById("img").value,
    pass:document.getElementById("pass").value
 
  }
  if(data.user.length<2){
    document.getElementById("error").innerHTML="please enetr must be 2 or more letter"
    return
  }
  let emailvali=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(!(emailvali.test(data.email))){
    alert("please valid email address")
    return
  }

  let paasvali=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
  if(!(paasvali.test(data.pass))){
    alert("please valid password")
    return
  }
signups.push(data)
console.log(signups)
localStorage.setItem("signup",JSON.stringify(signups))

}
document.getElementById("data").addEventListener("submit",signup)