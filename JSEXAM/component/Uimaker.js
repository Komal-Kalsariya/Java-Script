
const Display=(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele)=>{
        let que=document.createElement("h5")
        que.innerHTML=ele.question

        let A=document.createElement("p")
        A.innerHTML="A : " +ele.options.A

        let btn1=document.createElement("button")
        btn1.append(A)    
        let B=document.createElement("p")
        B.innerHTML="B : " +ele.options.B
        let btn2=document.createElement("button")
        btn2.append(B)   
        let C=document.createElement("p")
        C.innerHTML="C : " +ele.options.C
        let btn3=document.createElement("button")
        btn3.append(C)   

        let D=document.createElement("p")
        D.innerHTML="D : " +ele.options.D
        let btn4=document.createElement("button")
        btn4.append(D)   
        let correct=document.createElement("p")
        correct.innerHTML="correct: " +ele.correct

        btn1.addEventListener("click",()=>{
            if(ele.options.A === ele.correct ){
                btn1.style.backgroundColor="green"
            }
            else{
                btn1.style.backgroundColor="red"
            }
        })
        btn2.addEventListener("click",()=>{
            if(ele.options.B === ele.correct ){
                btn2.style.backgroundColor="green"
            }
            else{
                btn2.style.backgroundColor="red"
            }
        })
        btn3.addEventListener("click",()=>{
            if(ele.options.C === ele.correct ){
                btn3.style.backgroundColor="green"
            }
            else{
                btn3.style.backgroundColor="red"
            }
        })
        btn4.addEventListener("click",()=>{
            if(ele.options.D === ele.correct ){
                btn4.style.backgroundColor="green"
            }
            else{
                btn4.style.backgroundColor="red"
            }
        })
        btn1.setAttribute("class","d-block btn")
        btn2.setAttribute("class","d-block btn")
        btn3.setAttribute("class","d-block btn")
        btn4.setAttribute("class","d-block btn")
        let div=document.createElement("div")
        div.append(que,btn1,btn2,btn3,btn4,correct)

        document.getElementById(id).append(div)

    })   

}
export default Display