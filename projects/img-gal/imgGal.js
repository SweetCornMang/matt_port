function changeImg(evt){
        var bigBoxImg = document.getElementById("bigBoxImg");
        bigBoxImg.setAttribute("src", evt.target.src);
}  

var thumbs = document.getElementsByClassName("thumbs");
for(i = 0; i < thumbs.length; i++){
    thumbs[i].addEventListener("click", changeImg);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var bigBoxImg = document.getElementById("bigBoxImg");

    if(n > thumbs.length){
        slideIndex = 1;
    };
    if(n < 1){
        slideIndex = thumbs.length;
    }
    bigBoxImg.setAttribute("src", thumbs[slideIndex-1].src);
}