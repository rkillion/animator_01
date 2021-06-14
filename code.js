//facial features are named left-right from the animation's perspective
const skinTones = ["#c58c85","#ecbcb4","#d1a3a4","#a1665e","#4C3435","#592f2a"]
const skinElements = document.getElementsByClassName("skin");
const hairColors = ["#090908","#a5896b","#d9bf9e","#4a1d07","#8e3a16"];
const hairElements = document.getElementsByClassName("hair");
const hairStyles = [document.getElementById("noHair"), ...hairElements];
const hairStrokeElements = document.getElementsByClassName("hairStroke");
const noseElements = document.getElementsByClassName("nose");
const eyeBrowThicknesses = ["1px","4px","7px","10px"];
const backgroundColors = ["black","red","orange","yellow","green","blue","indigo","violet","white"];
let skinTone;
let skinToneReference = getRandomInt(skinTones.length);
let hairColor;
let hairColorReference = getRandomInt(hairColors.length);
let noseReference = getRandomInt(noseElements.length);
let eyeBrowThickness; 
let eyeBrowReference = getRandomInt(eyeBrowThicknesses.length);
let hairStyleReference = getRandomInt(hairStyles.length);
let backgroundColor;
let backgroundColorReference = getRandomInt(backgroundColors.length);
const combinationsPhrase = `There are ${skinTones.length*hairColors.length*noseElements.length*eyeBrowThicknesses.length*hairStyles.length} possible combinations!`;

document.getElementById("counterText").innerHTML = combinationsPhrase;

changeSkinColor();
changeHairColor();
changeNose();
changeEyebrows();
changeHairStyle();
changeBackground();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changeSkinColor() {
    skinToneReference = skinToneReference===(skinTones.length-1) ? 0 : skinToneReference+1;
    skinTone = skinTones[skinToneReference];
    for (let i=0;i<skinElements.length;i++) {
        skinElements[i].style.fill = skinTone;
    }
    document.getElementById("skinToneButton").firstChild.innerHTML = `${skinToneReference+1}/${skinTones.length}`;
}

function changeHairColor() {
    hairColorReference = hairColorReference===(hairColors.length-1) ? 0 : hairColorReference+1;
    hairColor = hairColors[hairColorReference];
    for (let i=0;i<hairElements.length;i++) {
        hairElements[i].style.fill = hairColor;
    }
    for (let i=0;i<hairStrokeElements.length;i++) {
        hairStrokeElements[i].style.stroke = hairColor;
    }
    document.getElementById("hairColorButton").firstChild.innerHTML = `${hairColorReference+1}/${hairColors.length}`;
}

function changeNose() {
    noseReference = noseReference===(noseElements.length-1) ? 0 : noseReference+1;
    for (let i=0;i<noseElements.length;i++) {
        if(i===noseReference) {
            noseElements[i].style.display= "block";
        } else {
            noseElements[i].style.display= "none";
        }
    }
    document.getElementById("noseButton").firstChild.innerHTML = `${noseReference+1}/${noseElements.length}`;
}

function changeEyebrows() {
    eyeBrowReference = eyeBrowReference===(eyeBrowThicknesses.length-1) ? 0 : eyeBrowReference+1;
    eyeBrowThickness = eyeBrowThicknesses[eyeBrowReference];
    let leftBrow = document.getElementById("leftBrow").style["stroke-width"] = eyeBrowThickness;
    document.getElementById("rightBrow").style["stroke-width"] = eyeBrowThickness;
    document.getElementById("eyebrowButton").firstChild.innerHTML = `${eyeBrowReference+1}/${eyeBrowThicknesses.length}`;
}

function changeHairStyle() {
    hairStyleReference = hairStyleReference===(hairStyles.length-1) ? 0 : hairStyleReference+1;
    for (let i=0;i<hairStyles.length;i++) {
        if(i===hairStyleReference) {
            hairStyles[i].style.display= "block";
        } else {
            hairStyles[i].style.display= "none";
        }
    }
    document.getElementById("hairStyleButton").firstChild.innerHTML = `${hairStyleReference+1}/${hairStyles.length}`;
}

function changeBackground() {
    backgroundColorReference = backgroundColorReference===(backgroundColors.length-1) ? 0 : backgroundColorReference+1;
    backgroundColor = backgroundColors[backgroundColorReference];
    document.getElementById("picFrame").style.background = backgroundColor;
    document.getElementById("backgroundButton").firstChild.innerHTML = `${backgroundColorReference+1}/${backgroundColors.length}`;
}