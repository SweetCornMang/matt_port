
/* THIS CODE THAT HANDLES THE IMGS GALLERY EXSISTS INSIDE THIS XMLHHTP REQUEST
    
TO ADD A NEW IMG:  INSIDE bithellJSON.json, CREATE A NEW JSON OBJECT INSIDE THE 
"imgs" OBJECT WITH THE "src" AND "desciption", THEN ADD THE PHOTO TO THE silder_images FOLDER 

ADDING VIDEOS: FIRST UPLOAD THE VIDEO TO YOUTUBE AND GRAB THE 'embed' src FROM THE
 VIDEO'S PAGE ON YOUTUBE (it should be under the share option under the youtube video 
player), INSERT THE src INTO THE JSON "vids" OBJECT. NEXT GRAB A THUMBNAIL AND PUT IT IN THE 
testImages FOLDER, INCLUDE THE THUMBNAIL src IN THE thumbPath PART IN THE vids OBJECT */ 

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        /*THIS PART HANDLES GETTING THE IMGS FROM THE JSON DOCUMENT 
        SO THEY CAN BE NAVIGATED BETWEEN ON THE SITE*/
        var container = document.getElementById("thumbContainer");

        for(i = 0; i < myObj.imgs.length; i++){
            var newImg = document.createElement("img");
            newImg.setAttribute("src", myObj.imgs[i].src);
            newImg.setAttribute("class", "thumb");
            container.appendChild(newImg);
        }   
        
        /* THIS SECTIONS HANDLES THE BACK AND FORWARD ARROWS */
        var thumbs = document.getElementsByClassName("thumb");


            //INTIALIZES THE FIRST IMG TO BE PUT INTO THE LARGE VIEWING AREA
        var slideIndex = 1;
        showSlides(slideIndex);

            //FUNCTION IS CALLED WITH ARGUEMENTS 1 AND -1 FOR BACK AND FORWARD
        function plusSlides(n){
            showSlides(slideIndex += n);
        }
            //ASSIGNING TO EACH SPECIFIC ARROW
        var arrow = document.getElementsByClassName("arrow");
        arrow[0].addEventListener("click", function(){
            plusSlides(-1);
        })

        arrow[1].addEventListener("click", function(){
            plusSlides(1);
        });


        /*CHECKS IF THE SLIDEINDEX IS AT THE LAST OR OR FIRST IMG
        OF THE IMG ARRAY AND SNDS IT BACK TO THE START OR THE END,
        THEN ASSIGNS THE SRC TO LARGE VIEWING AREA */
        function showSlides(n){
            var bigBoxImg = document.getElementById("largeImg");
            var descriptionBox = document.getElementById("imgDescription");


            if(n > thumbs.length){
                slideIndex = 1;
            };
            if(n < 1){
                slideIndex = thumbs.length;
            };
            bigBoxImg.setAttribute("src", thumbs[slideIndex-1].src);
            descriptionBox.innerHTML = myObj.imgs[slideIndex-1].description;
        }


        //USER CLICKS A PHOTO AND IT APPEARS IN THE LARGE VIEWER
        function changeImg(event){
            var bigBoxImg = document.getElementById("largeImg");
            bigBoxImg.setAttribute("src", event.target.src);

            //console.log(bigBoxImg.src);
           //console.log(thumbs[3].src);

           /* PAIRS THE INDEX FOR THE CURRENT PHOTO IN THE LARGE GALLERY 
           WITH THE INDEX IN THE DESCRIPTION TO FILL THE DESCIPTION BOX */
           var descriptionBox = document.getElementById("imgDescription");
            for(i = 0; i < thumbs.length; i++){
                if(thumbs[i].src == bigBoxImg.src){
                    descriptionBox.innerHTML = myObj.imgs[i].description;
                }
            }
        }         

        /* THIS FUNCTION ASSIGNING THE IMAGE CLICKING FUNCTION TO IMGS AND CORRECT
        THE SLIDEINDEX SO IT EQUALS THE INDEX OF THE CURRENT IMG PLUS 1 SO 
        BACK/FORWARD BUTTONS WORK */

        for(i = 0; i < thumbs.length; i++){
            thumbs[i].addEventListener("click", changeImg);

            (function(index){
                thumbs[i].onclick = function(){
                  slideIndex = index+1;
                }    
            })(i);
        }


        //VIDEO SECTION
        
        /* WORKS SIMILAR TO THE PHOTOS SECTION BUT WITH THE INCLUSION OF THUMBNAILS 
        THAT TRIGGER THEIR SPECIFIC VIDEO TO FILL THE PLAYER */
        var vidThumbContainer = document.getElementById("vidThumbContainer");

        for(i = 0; i < myObj.vids.length; i++){
            var newVidThumb = document.createElement("input");
            newVidThumb.setAttribute("type", "image");
            newVidThumb.setAttribute("class", "vidThumb");

            newVidThumb.setAttribute("src", myObj.vids[i].thumbPath);
            newVidThumb.setAttribute("value", myObj.vids[i].src);
            newVidThumb.setAttribute("class", "vidThumb");
            vidThumbContainer.appendChild(newVidThumb);
        }  

        var vidThumbs = document.getElementsByClassName("vidThumb");

        function changeVid(event){
            var frame = document.getElementById("vidFrame");
            frame.setAttribute("src", event.target.value);
        } 

        for(i = 0; i < vidThumbs.length; i++){
        vidThumbs[i].addEventListener("click", changeVid);
        }

        function showFirstVid(){
           var frame = document.getElementById("vidFrame");
           frame.setAttribute("src", vidThumbs[0].value);
        }

        showFirstVid();

    }
};
xmlhttp.open("GET", "js/bithellJSON.json", true);
xmlhttp.send();


/*

var vidThumbs = document.getElementsByClassName("vidThumb");

function changeVid(event){
    var frame = document.getElementById("vidFrame");
    frame.setAttribute("src", event.target.value);
} 

for(i = 0; i < vidThumbs.length; i++){
    vidThumbs[i].addEventListener("click", changeVid);
}

function showFirstVid(){
    var frame = document.getElementById("vidFrame");
    frame.setAttribute("src", vidThumbs[0].value);
}

showFirstVid();

*/

//THIS SECTIONS WILL TAKE CARE OF THE VIDEO SECTION

var imgButton = document.getElementById("imgButton");
var vidButton = document.getElementById("vidButton");


//THIS MAKES THE VIDEO AND PHOTO BUTTONS + ARROWS HIDE AND SHOW WHEN THE BUTTONS ARE PRESSED

function showHideConstructor(hide1, hide2, h, show1, show2, s, arrowStyle){
    this.hide1 = hide1;
    this.hide2 = hide2;
    this.h = h;
    this.show1 = show1;
    this.show2 = show2;
    this.s = s;
    this.arrowStyle = arrowStyle;
    this.showHideMethod = function(hide1, hide2, h, show1, show2, s, arrowStyle){
        var h1 = document.getElementById(hide1);
        var h2 = document.getElementById(hide2);
        var h = document.getElementById(h);

        var s1 = document.getElementById(show1);
        var s2 = document.getElementById(show2);
        var s = document.getElementById(s);

        var arrows = document.getElementsByClassName("arrow");

        h1.style.display = "none";
        h2.style.display = "none";
        h.style.display = "none";

        s1.style.display = "block";
        s2.style.display = "block";
        s.style.display = "block";
        for(i = 0; i < arrows.length; i++){
            arrows[i].style.visibility = arrowStyle;
        }
        
    }
}
//CALLED IN PROJECTS.HTML TO SHOW AND HIDE THES PHOTO AND VIDEO SECTIONS
var showHide = new showHideConstructor;


