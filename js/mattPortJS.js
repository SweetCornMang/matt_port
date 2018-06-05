//CONSTRUCTOR FOR HIDING AND REVEALING PORTIONS
function fadeConstructor(revealBox, hideBox1, hideBox2){
    this.revealBox = revealBox;
    this.hideBox1 = hideBox1;
    this.hideBox2 = hideBox2;
    this.fadeMethod = function(revealBox, hideBox1, hideBox2){
        $(document).ready(function(){
            $(hideBox1).css({"display": "none"});
            $(hideBox2).css({"display": "none"});
            $(revealBox).fadeIn(300);
        });
    }
}

//slide IS CALLED IN THE HTML WITH THE ARGUEMENTS OF WHAT ELEMENTS TO HIDE AND REVEAL
var fade = new fadeConstructor(); 

function tabColorConstructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.tabMethod = function(a, b, c){
            $(document).ready(function(){
        console.log(a, b, c);
            $(a).addClass("homeBoxLit");
            $(b).removeClass("homeBoxLit");
            $(c).removeClass("homeBoxLit");
    }   );
    }
}

var colorSwitcher = new tabColorConstructor();

//THE TWO UP AND DOWN ARROW FUNCTIONS
$(document).ready(function(){
    var downA = $("#downArrow");
    var upA = $("#upArrow");
    downA.click(function(){
        $(this).slideUp(600);
        upA.slideDown(600)
        $("body").animate({
            scrollTop: $(".dropDown").offset().top
        } );   
    });    
     upA.click(function(){
        $(this).slideUp(600);
        downA.slideDown(600);
        $("body").animate({
            scrollTop: $("#title").offset().top
        });
    });
   
});



console.log('hello');



/*
//CONSTRUCTOR FOR HIDING AND REVEALING PORTIONS
function slideConstructor(revealBox, hideBox1, hideBox2){
    this.revealBox = revealBox;
    this.hideBox1 = hideBox1;
    this.hideBox2 = hideBox2;
    this.slideMethod = function(revealBox, hideBox1, hideBox2){
        $(document).ready(function(){
            $(revealBox).delay(400).slideDown(1000, "linear",);
            $(hideBox1).slideUp(400, "linear");
            $(hideBox2).slideUp(400, "linear");
        });
    }
}

function scrollingControl(){
    $("html, body").delay(400).animate({
        scrollTop: $(document).height(),
        
    }, 1000, "linear");
}

//slide IS CALLED IN THE HTML WITH THE ARGUEMENTS OF WHAT ELEMENTS TO HIDE AND REVEAL
var slide = new slideConstructor(); 


*/




/*

var slideConstructor = function(revealBox, hideBox1, hideBox2){
    this.revealBox = revealBox;
    this.hideBox1 = hideBox1;
    this.hideBox2 = hideBox2;
}

slideConstructor.prototype.mymethod = function(){
        $(revealBox).slideDown();
        $(hideBox1).slideUp();
        $(hideBox2).slideUp();
        $("html, body").animate({
        scrollTop: "1000px"
        }, 2000 );
}

var test = new slideConstructor('skillsDrop', 'worksDrop', 'aboutDrop');
test.mymethod();






onclick="testSlide('skillsDrop', 'worksDrop', 'aboutDrop')"




function testSlide(revealBox, hideBox1, hideBox2){
    $(revealBox).slideDown();
    $(hideBox1).slideUp();
    $(hideBox2).slideUp();
    $("html, body").animate({
    scrollTop: "1000px"
    }, 2000 );
}

$(document).ready(function(){
    $("#skills").click(testSlide('skillsDrop', 'worksDrop', 'aboutDrop'));
});
*/
