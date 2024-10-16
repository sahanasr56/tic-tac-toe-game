let boxes=document.querySelectorAll(".box");
let body=document.querySelector("body");
let reset=document.querySelector(".reset");
let para=document.querySelector(".win");
let newgame=document.querySelector(".new");
let msg=document.querySelector("#msg");
let valX=document.querySelector("#valX");
let valO=document.querySelector("#valO");
let intro=document.querySelector(".intro");

let count=0;

let turn0=true;

let winList=[[0,4,8],[0,1,2],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const btnDisabled=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

btnDisabled();
valX.addEventListener("click",()=>{
    turn0=false;
    intro.classList.add("hide");
    btnEnabled();
});

valO.addEventListener("click", ()=>{
    turn0=true;
    intro.classList.add("hide");
    btnEnabled();
})


const btnEnabled=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
const newGame=()=>{
    count=0;
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        para.innerText="";
    })
    intro.classList.remove("hide");
    btnDisabled();
    msg.classList.add("hide");
}

    reset.addEventListener("click",()=>{
        newGame();
    })

    newgame.addEventListener("click",()=>{
        newGame();
    })

const checkResult=(btn)=>{
    if (count===9){
        para.innerText=`Oops! Game Over`;
        msg.classList.remove("hide");
    }
    for (let pattern of winList){
        let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos1===pos3){
                para.innerText=`Congratulations! Winner is ${pos1}`;
                msg.classList.remove("hide");
                btnDisabled();
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
            box.style.color="#E2F1E7";
        }else{
            box.innerText="X";
            box.style.color="#E7CCCC";
            turn0=true;
        }
        count++;
        checkResult(boxes);
        box.disabled=true;
    })
})
