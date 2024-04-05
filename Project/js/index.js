
let products = JSON.parse(localStorage.getItem("product")) || []
let cart=JSON.parse(localStorage.getItem("cart"))||[]
console.log(cart)
//----------------add to cart------------
const carts=(ele)=>{
    
    cart.push({...ele,qty:1})
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    }

let deleteproduct = (i) => {
    products.splice(i, 1)
    display(products)
    localStorage.setItem("product", JSON.stringify(products))
}

let display = (data) => {
    
    document.getElementById("box").innerHTML = ""
    data.map((ele, i) => {

        
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("price")
        price.innerHTML = "Price:" + ele.price

        let category = document.createElement("category")
        category.innerHTML = "<br>" + "Category:" + ele.category

        let btn1 = document.createElement("button")
        btn1.innerHTML = "Buy"

        btn1.addEventListener("click",()=>carts(ele))

        let btn = document.createElement("button")
        btn.innerHTML = "Delete"

        btn.addEventListener("click", () => deleteproduct(i))

        let div = document.createElement("div")
        div.append(title, img, price, btn, category, btn1)
        div.setAttribute("class", "box1")
        title.setAttribute("class", "title")
        img.setAttribute("class", "imag")
        price.setAttribute("class", "price")
        btn.setAttribute("class", "btn  btn-success m-3")
        btn1.setAttribute("class", "btn btn-warning ms-2")
        document.getElementById("box").append(div)



    })

    

}
display(products)




//----------searching-----------
const search = (val) => {
    let temp = products.filter((ele) => ele.title == val)
    // console.log(temp)
    display(temp)
}

const handlesearch = (e) => {

    e.preventDefault();

    let val = document.getElementById("search").value
    // console.log(val)
    search(val)
}
//----------sorting-------------

const sortingprod = (val) => {
    let temp;
    if (val == "htl") {
        temp=products.sort((a, b) => b.price - a.price)
        // console.log(temp)
        display(temp)
    }
    else {
        temp=products.sort((a, b) => a.price - b.price)
        display(temp)
    }
}

//-----------filtering------------
const handlefilter=(val)=>{
    let temp=products.filter((ele)=>ele.category==val)
    console.log(temp)
    display(temp)
}

document.getElementById("searchform").addEventListener("submit", handlesearch)
document.getElementById("htl").addEventListener("click", () => sortingprod("htl"))
document.getElementById("lth").addEventListener("click", () => sortingprod("lth"))
document.getElementById("kid").addEventListener("click",()=>handlefilter("kid"))
document.getElementById("male").addEventListener("click",()=>handlefilter("male"))
document.getElementById("female").addEventListener("click",()=>handlefilter("female"))



