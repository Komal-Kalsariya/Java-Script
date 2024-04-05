
let products=JSON.parse(localStorage.getItem("product"))||[]

const product=(e)=>{
    e.preventDefault();

    let data={

        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value
    }

    console.log(data);

    if(data.title.length<2){
        document.getElementById("error").innerHTML="Please enetr must be grether then two letter"
        return
    }
    if(data.img==""){
        document.getElementById("error1").innerHTML="Please enetr url"
        return
    }
    if(data.price==""){
        alert("please enter valid price")
        return
    }
  
    if(data.category.length==""){
       document.getElementById("error2").innerHTML="Please enetr categoryr"
    return
    }
    products.push(data)
    console.log(products)
    localStorage.setItem("product",JSON.stringify(products));

  
    window.location.href="/project/index.html"
}


document.getElementById("data").addEventListener("submit",product)


let islogins=localStorage.getItem("islogin")||false

if(islogins){
document.getElementById("login-id").innerHTML="logout"
}
else{
    window.location.href="/Project/pages/login.html"
}