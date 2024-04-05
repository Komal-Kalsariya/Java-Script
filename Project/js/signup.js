
let signups=JSON.parse(localStorage.getItem("datas"))||[]

const signup=(e)=>{
    e.preventDefault();

    let sign={
        user:document.getElementById("user").value,
        mail:document.getElementById("mail").value,
        pass:document.getElementById("pass").value
    }
   
    let emailvalidation=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(!(emailvalidation.test(sign.mail))){
        alert("please valid emal address...")
        return
    }

    let passvalidation=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if(!(passvalidation.test(sign.pass))){
        alert("please enter valid password")
        return
    }

    signups.push(sign)

    localStorage.setItem("datas",JSON.stringify(signups))
    localStorage.setItem("islogin",true)
    window.location.href="/project/index.html"

}



document.getElementById("data").addEventListener("submit",signup)