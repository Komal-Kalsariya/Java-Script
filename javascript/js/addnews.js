
let products=JSON.parse(localStorage.getItem("product"))||[]

const addnews=(e)=>{
    e.preventDefault();

  let data={
    title:document.getElementById("title").value,
    img:document.getElementById("img").value,
    content:document.getElementById("content").value,
    country:document.getElementById("country").value
  }
products.push(data)
console.log(products)
localStorage.setItem('product', JSON.stringify(products))
window.location.href="/index.html"
}
document.getElementById("data").addEventListener("submit",addnews)