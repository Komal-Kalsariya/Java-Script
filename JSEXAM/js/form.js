import postData from "../API/post.js";
import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()


const AddQuestion=(e)=>{
    e.preventDefault()
    let data={
        question:document.getElementById("que").value,
        options:{
            A:document.getElementById("a-que").value,
            B:document.getElementById("b-que").value,
            C:document.getElementById("c-que").value,
            D:document.getElementById("d-que").value,
        },
        correct:document.getElementById("correct").value,
    }

    if(data.question.length==0){
        alert("please enter Question")
        return
        
    }
    if(data.options.A.length==0 || data.options.B.length==0 || data.options.C.length==0 || data.options.D.length==0 ){
        alert("please enter option")
        return
        
    }
    if(data.correct==0){
        alert("please enter correct answer")
        return
        
    }
    postData("http://localhost:3000/questions",data)
}
document.getElementById("data").addEventListener("submit",AddQuestion)