function playRound(result) {
    // let count=0;
    let player=prompt("Enter your choice: ").toLowerCase();
    let comp=computerSelection();
    if(comp==player)
    {
        console.log("Its a tie");
    }
    else if((player=="rock" && comp=="scissors") || (player=="paper" && comp=="rock") || (player=="scissors" && comp=="paper"))
    {
        result[0]++;
        console.log("Yay!, you won this round:)");
    }
    else
    {
        result[1]++;
        console.log("Oops, you lost this round");
    }   
    return result;
}

const choices=["rock","paper","scissors"];

function computerSelection(){
    var compChoice=choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

let result=new Array();
result[0]=0;result[1]=0;
for (let index = 0; index < 5; index++) {
    result=playRound(result);
}

let win=result[0],lose=result[1];

if(win>lose)
{
    console.log("Congratulations!! You've won this tournament");
}
else 
{
    console.log("Sorry you lost this tournament");
}