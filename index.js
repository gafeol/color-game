var R, G, B;
var color;
var chosen;
var won = false;
var fire = 0;
var fireSpan = document.querySelector("#points");
var bestSpan = document.querySelector("#best");
document.querySelector(".jumbotron").style.background = "#cccecc";

resultSpan = document.querySelector("#result");

var cardList = document.querySelectorAll(".card");

for(var i=0;i<cardList.length;i++){
    cardList[i].id = i;
    cardList[i].addEventListener("click", function(){ 
        if (!won) {
            if (this.id == chosen) {
                won = true;
                fire++;
                fireSpan.innerText = fire;
                if(fire > Number(bestSpan.innerText))
                    bestSpan.innerText = fire;
                resultSpan.innerText = "Correct!";
                document.querySelector(".jumbotron").style.background = color;
                for (var i = 0; i < cardList.length; i++) {
                    cardList[i].style.backgroundColor = color;
                    cardList[i].classList.remove("border-white");
                }
                setTimeout(resetGame, 1000);
            }
            else {
                fire = 0;
                fireSpan.innerText = fire;
                resultSpan.innerText = "Try again";
                this.style.backgroundColor = "white";
                this.classList.add("border-white");
            }
        }
    });
}

updatePage();


function randColor(){
    return Math.floor(Math.random()*1000000007) % 256;
}

function generateColor(){
    R = randColor();
    G = randColor();
    B = randColor();
    color = "rgb("+R+", "+G+", "+B+")";
}

function updatePage(){
    generateColor();

    var sp = document.querySelector("#rgb");
    sp.innerText = "RGB("+R+", "+G+", "+ B+")";

    chosen = Math.floor(Math.random() * cardList.length);

    console.log("chosen: ", chosen);

    for(var i=0;i<cardList.length;i++){
        cardList[i].classList.remove("border-white");
        var chosenColor;
        if(i == chosen)
            chosenColor = color;
        else
            chosenColor = "rgb("+randColor()+", "+randColor()+", "+randColor()+")";
        cardList[i].style.backgroundColor = chosenColor;
    }
}

function resetGame(){
    won = false;
    resultSpan.innerText = "";
    document.querySelector(".jumbotron").style.background = "#cccecc";
    updatePage();
}

document.getElementById("reset").addEventListener("click", resetGame);
