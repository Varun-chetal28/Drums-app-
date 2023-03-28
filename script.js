
let soundA = new Audio("Akey.mp3");
let soundS = new Audio("Skey.mp3");
let soundD = new Audio("Dkey.mp3");
let soundF = new Audio("Fkey.mp3");
let soundG = new Audio("Gkey.mp3");

function drumSoundA(){ 
    soundA.play();
}
function drumSoundS(){
    soundS.play();
}
function drumSoundD(){
    soundD.play();
}
function drumSoundF(){
    soundF.play();
}
function drumSoundG(){
    soundG.play();
}

document.getElementById("keyA").addEventListener("click" , drumSoundA);
document.getElementById("keyS").addEventListener("click" , drumSoundS);
document.getElementById("keyD").addEventListener("click" , drumSoundD);
document.getElementById("keyF").addEventListener("click" , drumSoundF);
document.getElementById("keyG").addEventListener("click" , drumSoundG);
document.getElementById("keyA").addEventListener("onkeydown", drumSoundA);


addEventListener("keyup", (event) => {
    if (event.key == 'a' || event.key == 'A') {
        drumSoundA();
    }
    else if (event.key == 's' || event.key == 'S'){
        drumSoundS();
    }
    else if (event.key == 'd' || event.key == 'D'){
        drumSoundD();
    }
    else if (event.key == 'f' || event.key == 'F'){
        drumSoundF();
    }
    else if (event.key == 'g' || event.key == 'G'){
        drumSoundG();
    }
});



