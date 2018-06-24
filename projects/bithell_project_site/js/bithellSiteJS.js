/*

            HAD TO USE 2 JS FILES BECUS BOTH IMG SLIDERS WONT PLAY NICELY TOGETHER

*/







//THIS IS CALLED IN THE INDEX TO MAKE THE HOME BOXES HOVER
function constructor(val1, val2){
    this.val1 = val1;
    this.val2 = val2;
    this.hoverMethod = function(val1, val2){
        var homeButtons = document.getElementsByClassName("homeBox");
        for(i = 0; i < homeButtons.length; i++){
            homeButtons[i].style.marginLeft = val1;
            homeButtons[i].style.marginRight = val2;
        }
    }
}
var hover = new constructor();



//AUTO SLIDESHOW ON HOMEPAGE TO TEASE USER WITH A FEW KEY IMAGES
//CHANGES DISPLAY PROPERTY OF IMGS EVERY 3 SECONDS
var autoslideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    
    var i;
    var autoSlides = document.getElementsByClassName("mySlides");
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none";  
    }
    autoslideIndex++;
    if (autoslideIndex > autoSlides.length){
        autoslideIndex = 1
    }   
    autoSlides[autoslideIndex-1].style.display = "block";
    setTimeout(autoShowSlides, 3500)  
} 





//USER CLICKS A PHOTO AND IT APPEARS IN THE LARGE VIEWER
function changeImg(event){
    var bigBoxImg = document.getElementById("largeImg");
    bigBoxImg.setAttribute("src", event.target.src);
}  

/* THIS FUNCTION ASSIGNING THE IMAGE CLICKING FUNCTION TO IMGS AND CORRECT
THE SLIDEINDEX SO IT EQUALS THE INDEX OF THE CURRENT IMG PLUS 1 SO 
BACK/FORWARD BUTTONS WORK */
var thumbs = document.getElementById("thumbContainer").children;
for(i = 0; i < thumbs.length; i++){
    thumbs[i].addEventListener("click", changeImg);

    (function(index){
        thumbs[i].onclick = function(){
              slideIndex = index+1 ;
        }    
    })(i);
}


/* THIS SECTIONS HANDLES THE BACK AND FORWARD ARROWS */

    //INTIALIZES THE FIRST IMG TO BE PUT INTO THE LARGE VIEWING AREA
var slideIndex = 1;
showSlides(slideIndex);

    //FUNCTION IS CALLED IN PROJECTS.HTML WITH ARGUEMENTS 1 AND -1 FOR BACK AND FORWARD
function plusSlides(n){
    showSlides(slideIndex += n);
}

    /*CHECKS IF THE SLIDEINDEX IS AT THE LAST OR OR FIRST IMG
     OF THE IMG ARRAY AND SNDS IT BACK TO THE START OR THE END,
      THEN ASSIGNS THE SRC TO LARGE VIEWING AREA */
function showSlides(n){
    var bigBoxImg = document.getElementById("largeImg");

    if(n > thumbs.length){
        slideIndex = 1;
    };
    if(n < 1){
        slideIndex = thumbs.length;
    };
    bigBoxImg.setAttribute("src", thumbs[slideIndex-1].src);
}