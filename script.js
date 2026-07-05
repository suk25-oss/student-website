const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});
const modal = document.getElementById("subjectModal");

function openModal(title,image,text){

document.getElementById("modalTitle").innerHTML=title;

document.getElementById("modalImage").src=image;

document.getElementById("modalText").innerHTML=text;

modal.style.display="flex";

}

document.querySelector(".close").onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}