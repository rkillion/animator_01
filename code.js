//facial features are named left-right from the animation's perspective
const skinTones = ["#c58c85","#ecbcb4","#d1a3a4","#a1665e","#4C3435","#592f2a"]
const skinElements = document.getElementsByClassName("skin");
let skinTone;
let skinToneReference = getRandomInt(skinTones.length);

changeSkinColor(); 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changeSkinColor() {
    skinToneReference = skinToneReference===(skinTones.length-1) ? 0 : skinToneReference+1;
    skinTone = skinTones[skinToneReference];
    for (let i=0;i<skinElements.length;i++) {
        skinElements[i].style.fill = skinTone;
    }
}

function changeNose() {
    document.getElementById("nose").style.display= "none";
}