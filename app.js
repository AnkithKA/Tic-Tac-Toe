let boxes= document.querySelectorAll('.box');
let restBtn= document.querySelector('#reset');
let turn0=true;
let newGameBtn=document.querySelector('#newGm');
let msg=document.querySelector('#winner');
let msgContainer=document.querySelector('.result');
let count=0;
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const showWinner=(winner)=>{
    msg.innerText=`${winner} is the winner!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });    
};

const checkWinner = () =>{
    for(let combos of winCombos){
        let pos1val=boxes[combos[0]].innerHTML;
        let pos2val=boxes[combos[1]].innerHTML;
        let pos3val=boxes[combos[2]].innerHTML;
        if(pos1val!=''&&pos2val!=''&&pos3val!=''){
            if(pos1val==pos2val&&pos2val==pos3val){
                showWinner(pos1val);
            }
        }
        if(count==9){
            msg.innerText='Draw!';
            msgContainer.classList.remove('hide');
        }

    }
}

boxes.forEach((box)=>{
    box.addEventListener('click',function(e){
        count+=1;
        if(turn0){
            e.target.innerHTML='X';
            turn0=false;
        }else{
            e.target.innerHTML='O';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

restBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        box.disabled=false;
    });
    msgContainer.classList.add('hide');
    count=0;
});

