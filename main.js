const shareButton = document.getElementsByClassName("section__author__shareButton");
const buttonImg = document.getElementsByClassName("ButtonImg");
const popup = document.getElementsByClassName("section__author__shareButton__popup");
const authorContainer = document.getElementsByClassName("section__authorContainer")
const authorText = document.getElementsByClassName("section__author__text");
const authorImage = document.getElementsByClassName("section__author__picture");
let popup_on = false


function showPopup(){
    if (window.matchMedia("(max-width: 600px)").matches){
        console.log("screen width less than 600px");
        popup[0].style.position ="static";
        popup[0].style.transform = "translate(0px, 0px)";
        popup[0].style.maxWidth = "80%";

        if (popup_on == false) {
            shareButton[0].style.backgroundColor = "var(--blue-700)";
            buttonImg[0].style.filter = "brightness(200%)"
            authorText[0].style.display = "none";
            authorImage[0].style.display = "none";
            popup[0].style.display ="flex";
            popup[0].style.borderWidth = "0";
            authorContainer[0].style.backgroundColor = "var(--blue-900)";
            popup_on = true;
        }
        else if (popup_on == true) {
            shareButton[0].style.backgroundColor = "white";
            buttonImg[0].style.filter = "brightness(100%)"
            authorText[0].style.display = "block";
            authorImage[0].style.display = "block";
            popup[0].style.display = "none";
            authorContainer[0].style.backgroundColor = "white";
            popup_on = false;
        }
    }

    else {
        console.log("screen width greater than 600px");
        popup[0].style.position ="absolute";
        popup[0].style.top = "-70px";
        popup[0].style.right = "-32%";
        popup[0].style.maxWidth = "300px";

        if (popup_on == false) {
            shareButton[0].style.backgroundColor = "var(--blue-700)";
            buttonImg[0].style.filter = "brightness(200%)";
            popup[0].style.display = "flex";
            popup_on = true;
        }
        else if (popup_on == true) {
            authorContainer[0].style.backgroundColor = "white";
            shareButton[0].style.backgroundColor = "white";
            authorText[0].style.display = "block";
            authorImage[0].style.display = "block";
            buttonImg[0].style.filter = "brightness(100%)";
            popup[0].style.display = "none";
            popup_on = false;
        }
    }
    console.log("popup: " + popup_on);

}