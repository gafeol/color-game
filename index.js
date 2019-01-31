var R, G, B;
var color;
var chosen;
var won = false;
document.querySelector(".jumbotron").style.background = "#cccecc";

var cardList = document.querySelectorAll(".card");

for(var i=0;i<cardList.length;i++){
    cardList[i].id = i;
    cardList[i].addEventListener("click", function(){ 
        if (!won) {
            if (this.id == chosen) {
                won = true;
                document.querySelector(".jumbotron").style.background = color;
                for (var i = 0; i < cardList.length; i++) {
                    cardList[i].style.backgroundColor = color;
                    cardList[i].classList.remove("border-white");
                }
            }
            else {
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

    var sp = document.querySelector("span");
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

document.getElementById("reset").addEventListener("click", () => {
    won = false;
    document.querySelector(".jumbotron").style.background = "#cccecc";
    updatePage();
})
