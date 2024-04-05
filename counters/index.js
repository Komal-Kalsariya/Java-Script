let count=localStorage.getItem("count")|| 0

document.getElementById("count1").innerHTML=count
let counters=()=>{
    count++;
    document.getElementById("count1").innerHTML=count
    localStorage.setItem("count",count)

}
document.getElementById("btn").addEventListener("click",counters)

let count2=localStorage.getItem("sbcribe")||0
document.getElementById("count2").innerHTML=count2
let sbcribe=()=>{
    count2++;
    document.getElementById("count2").innerHTML=count2
    localStorage.setItem("sbcribe",count2)
    
}
document.getElementById("btn1").addEventListener("click",sbcribe)

let count3=localStorage.getItem("comment")||0
document.getElementById("count3").innerHTML=count3
let comment=()=>{
    count3++;
    document.getElementById("count3").innerHTML=count3
    localStorage.setItem("comment",count3)
}
document.getElementById("btn2").addEventListener("click",comment)

let count4=localStorage.getItem("ratting")||0
document.getElementById("count4").innerHTML=count4
let ratting=()=>{
    count4++;
    document.getElementById("count4").innerHTML=count4
    localStorage.setItem("ratting",count4)
}
document.getElementById("btn3").addEventListener("click",ratting)