let datastore = []
let ui = (data) => {
    document.getElementById("box1").innerHTML = ""
    data.map((ele) => {

        let id = document.createElement("p")
        id.innerHTML = ele.id


        let title = document.createElement("p")
        title.innerHTML = ele.title

        let price = document.createElement("p")
        price.innerHTML = ele.price



        let thumbnail = document.createElement("img")
        thumbnail.src = ele.thumbnail



        let div = document.createElement("div")
        div.append(title, thumbnail, `price:`, price)
        div.setAttribute("class", "boxe")
        id.setAttribute("class", "id")
        title.setAttribute("class", "title")
        price.setAttribute("class", "Price")
        thumbnail.setAttribute("class", "thumbnail")
        document.getElementById("box1").append(div)

    })
}




const getdata = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json()
        datastore = data.products
        ui(data.products)


        // console.log(datastore)
    }
    catch (error) {
        console.log(error)
    }
}
getdata()

const dispaly = (val) => {

    let temp = datastore.filter((ele) => ele.title == val)
    ui(temp)
}

const searchdata = (e) => {
    e.preventDefault();

    let val = document.getElementById("search").value
    // console.log(val)
    dispaly(val)
}
const handelfilter = (val) => {
    if (val == "htl") {
        let temp = datastore.sort((a, b) => b.price - a.price)
        console.log(temp)
        ui(temp)
    }
    else {
        let temp = datastore.sort((a, b) => a.price - b.price)
        ui(temp)
    }
    
}
const handeldata=(val)=>{
    let temp=datastore.filter((ele)=>ele.title==val)
    ui(temp)
}
document.getElementById("htl").addEventListener("click", () => handelfilter("htl"))
document.getElementById("lth").addEventListener("click", () => handelfilter("lth"))
document.getElementById("iPhone 9").addEventListener("click",()=>handeldata("iPhone 9"))
document.getElementById("OPPOF19").addEventListener("click",()=>handeldata("OPPOF19"))
document.getElementById("Huawei P30").addEventListener("click",()=>handeldata("Huawei P30"))
document.getElementById("search-form").addEventListener("submit", searchdata)