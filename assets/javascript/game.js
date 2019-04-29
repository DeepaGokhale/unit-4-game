//declare global variables 
let computerRandom = 0;
let wins = 0;
let losses = 0;
let totalScore =0;
let gems1 = 0;
let gems2 = 0;
let gems3 = 0;
let gems4 = 0;


$(".imgGems").on("click", function(){
    var gemClicked = $(this).attr("id");
    switch(gemClicked){
        case 'saphire':
            console.log('saphire clicked');
            totalScore = totalScore + gems1;
            break;
        case 'topaz':
            totalScore = totalScore + gems2;
            break;
        case 'emerald':
            totalScore = totalScore + gems3;
            break;
        case 'ruby':
            totalScore = totalScore + gems4;
            break;
        default:
        console.log('something went wrong' + gemClicked);
    }
    winOrLoss(totalScore);
})

function generateRandom(){    
    totalScore = 0;
    $("#scoreVal").text(totalScore);
    computerRandom = Math.round(Math.random() * (120-19) + 19);
    $("#random-pick").text(computerRandom);

    gems1 = Math.round(Math.random() * (12-1) + 1);
    gems2 = Math.round(Math.random() * (12-1) + 1);
    gems3 = Math.round(Math.random() * (12-1) + 1);
    gems4 = Math.round(Math.random() * (12-1) + 1);
}

function winOrLoss(totalScore){    
    console.log("got here with: " + totalScore);    
    if (parseInt(totalScore) > parseInt(computerRandom))
    {
        losses = losses + 1;
        $("#Loss").text("Losses: " + losses);
        $("#wins").text("Wins: " + wins);
        generateRandom();
    }
    else if (parseInt(totalScore) == parseInt(computerRandom))
    {
        //add win
        console.log("Wins: " + totalScore);
        wins = wins + 1;
        $("#wins").text("Wins: " + wins);
        $("#Loss").text("Losses: " + losses);
        generateRandom();
    }
    else
    {
        $("#scoreVal").text(totalScore);
    }
}