let cart=JSON.parse(localStorage.getItem("cart"))||[]
let decpro=(opr,index)=>{
    if(opr=="+"){
        cart[index].qty+=1
    }
    else{
        if(cart[index].qty==1){
            cart.splice(index,1)
        }
        else{
            cart[index].qty-=1
        }
        
    }
    
   
    localStorage.setItem("cart",JSON.stringify(cart))
    display(cart)
}
let sum=0;
let display = (data) => {
    document.getElementById("box").innerHTML = ""
    data.map((ele, index) => {

        sum=ele.price*ele.qty
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("price")
        price.innerHTML = "Price:"+ ele.price

        let btn2=document.createElement("button")
        btn2.innerHTML="-"

        btn2.addEventListener("click",()=>decpro("-",index))
       
        let btn3=document.createElement("button")
        btn3.innerHTML=ele.qty
        let btn4=document.createElement("button")
        btn4.innerHTML="+"
        btn4.addEventListener("click",()=>decpro("+",index))
        let btn1 = document.createElement("button")
        btn1.innerHTML = "Buy"

        btn1.addEventListener("click",()=>carts(ele))

        let btn = document.createElement("button")
        btn.innerHTML = "Delete"

     

        let div = document.createElement("div")
        div.append(title, img, price,btn2,btn3,btn4)
      
        div.setAttribute("class", "box1")
        title.setAttribute("class", "title")
        img.setAttribute("class", "imag w-50 h-50")
        price.setAttribute("class", "price d-block")
        btn.setAttribute("class", "btn  btn-success")
        btn2.setAttribute("class", "btn  btn-success m-2")
        btn3.setAttribute("class", "btn  btn-success me-2")
        btn4.setAttribute("class", "btn  btn-success")
        btn1.setAttribute("class", "btn btn-warning ms-2")
        document.getElementById("box").append(div)



    })
    let btn=document.createElement("button")
    btn.innerHTML=sum
    let btn1=document.createElement("button")
    btn1.innerHTML="checkout"
    btn.setAttribute("class","btn btn-info h-25 me-2")
    btn1.setAttribute("class","btn btn-info h-25")
    btn1.addEventListener("click",()=>{
        localStorage.removeItem("cart")
        display([])
    })
    document.getElementById("box1").append(btn,btn1)
}
display(cart)
