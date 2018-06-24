//AUTO SLIDESHOW ON HOMEPAGE TO TEASE USER WITH A FEW KEY IMAGES
/* CHANGES DISPLAY PROPERTY OF IMGS EVERY 3 SECONDS, A CSS 
TRANSITION IS TIMED FOR THE IMG CHANGING */
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