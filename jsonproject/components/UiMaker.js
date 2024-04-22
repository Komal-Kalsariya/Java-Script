const display = (data,id) => {
    
    document.getElementById(id).innerHTML = ""
    data.map((ele) => {

        
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("price")
        price.innerHTML = "Price:" + ele.price

        let Category = document.createElement("p")
        Category.innerHTML ="Category:" + ele.Category

        let btn=document.createElement("button")
        btn.innerHTML="BUY"
        let btn1=document.createElement("button")
        btn1.innerHTML="DELETE"
        let div = document.createElement("div")
        div.append(img,title, price, Category,btn,btn1)
        div.setAttribute("class", "box1")
        // title.setAttribute("class", "title")
        // img.setAttribute("class", "imag")
        // price.setAttribute("class", "price")
        btn.setAttribute("class", "btn  btn-warning")
         btn1.setAttribute("class", "btn btn-info ms-2")
        document.getElementById(id).append(div)



    })

    

}
export default display