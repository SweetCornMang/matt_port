
/* FUNCTION BELOW: ANY BUTTON THAT IS CLICKED CREATES AN 
ELEMENT BELOW WITH THE ACTUAL ANSWER AS IT'S innerHTML 
AND THE QUESTION'S NUMBER AS IT'S ID */
function getValue(button){
    var data = document.getElementById("data");
    var val = button.value;
    var qId = button.parentNode.id;

    var answerChecker = document.createElement("div");
    var answerNode = document.createTextNode(val);

	answerChecker.appendChild(answerNode);
    answerChecker.setAttribute("id", qId + "a");
    
	data.appendChild(answerChecker);
}

/* FUCNTIONS BELOW: TAKES TWO ANSWERS, COMPARES THEM AND RETURNS WHICH 
OF THE 9 OUTCOMES THE USER HAS PICKED. 

ONE FUNCTION DETERMINES CHEESE POTION AND THE OTHER DETERMINES BREAD OPTIONS 

THEN CREATES A NEW ELEMENT CONTAINING THE OUTCOME TO BE REFERED TO LATER */
function calcCheese(){
    var q1 = document.getElementById("q1a").innerHTML;
    var q2 = document.getElementById("q2a").innerHTML;
    //console.log(q1, q2);
    //CHECKS USERS ANSWERS AND ASSIGNS OUTCOME TO THE CORRECT OUTCOME
    var outcome = "";
    var imgPath = "";
    if(q1 == "1a" && q2 == "2a"){
        outcome = "Mozzarella";
        imgPath = "imgs/mozz.jpg";
    } else if(q1 == "1a" && q2 == "2b"){
        outcome = "Muenster";
        imgPath = "imgs/meun.jpg";
    } else if(q1 == "1a" && q2 == "2c"){
        outcome = "Swiss";
        imgPath = "imgs/swiss.png";
    } 
    else if(q1 == "1b" && q2 == "2a"){
        outcome = "Havarti";
        imgPath = "imgs/havar.jpg";
    } else if(q1 == "1b" && q2 == "2b"){
        outcome = "Provolone";
        imgPath = "imgs/prov.png";
    } else if(q1 == "1b" && q2 == "2c"){
        outcome = "Sharp Cheddar";
        imgPath = "imgs/sharched.jpg";
    } 
    else if(q1 == "1c" && q2 == "2a"){
        outcome = "Gruyere";
        imgPath = "imgs/gruy.jpg";
    } else if(q1 == "1c" && q2 == "2b"){
        outcome = "Pepper Jack";
        imgPath = "imgs/pjack.jpeg";
    } else if(q1 == "1c" && q2 == "2c"){
        outcome = "Blue & Feta";
        imgPath = "imgs/feta.jpg";
    } 
    //TAKES OUTCOME TEXT AND ASSIGNS IT TO A NODE AND APPENDS NODE TO A NEW ELEMENT
    var imgPathNode = document.createTextNode(imgPath);
    var imgPathCheese = document.createElement("div");
    imgPathCheese.appendChild(imgPathNode);
    imgPathCheese.setAttribute("id", "imgPathCheese");

    var cheeseTypeNode = document.createTextNode(outcome);
    var cheeseTypeElem = document.createElement("div");
    cheeseTypeElem.appendChild(cheeseTypeNode); 
    cheeseTypeElem.setAttribute("id", "cheese");

    //APPENDS THE ELEMENT TO THE DATA BOX
    data.appendChild(cheeseTypeElem);
    data.appendChild(imgPathCheese);
}

function calcBread(){
    var q3 = document.getElementById("q3a").innerHTML;
    var q4 = document.getElementById("q4a").innerHTML;
    //console.log(q1, q2);
    //CHECKS USERS ANSWERS AND ASSIGNS OUTCOME TO THE CORRECT OUTCOME
    var outcome = "";
    var imgPath = "";
    if(q3 == "3a" && q4 == "4a"){
        outcome = "Focaccia";
        imgPath = "imgs/foc.jpg";
    } else if(q3 == "3a" && q4 == "4b"){
        outcome = "Ciabatta";
        imgPath = "imgs/chib.jpeg";   
    } else if(q3 == "3a" && q4 == "4c"){
        outcome = "Sour Dough";
        imgPath = "imgs/sour.jpg";
    } 
    else if(q3 == "3b" && q4 == "4a"){
        outcome = "English Muffin";
        imgPath = "imgs/engmuf.jpg";
    } else if(q3 == "3b" && q4 == "4b"){
        outcome = "Rye";
        imgPath = "imgs/rye.jpg";
    } else if(q3 == "3b" && q4 == "4c"){
        outcome = "Whole Wheat English Muffin";
        imgPath = "imgs/wholemuf.jpg";
    } 
    else if(q3 == "3c" && q4 == "4a"){
        outcome = "Pumpernickel";
        imgPath = "imgs/pump.jpeg";  
    } else if(q3 == "3c" && q4 == "4b"){
        outcome = "Whole Wheat";
        imgPath = "imgs/whole.jpg";
    } else if(q3 == "3c" && q4 == "4c"){
        outcome = "MultiGrain";
        imgPath = "imgs/multi.jpg";
        
    } 

    //TAKES OUTCOME TEXT AND ASSIGNS IT TO A NODE AND APPENDS NODE TO A NEW ELEMENT
    var imgPathNode = document.createTextNode(imgPath);
    var imgPathBread = document.createElement("div");
    imgPathBread.appendChild(imgPathNode);
    imgPathBread.setAttribute("id", "imgPathBread");

    var breadTypeNode = document.createTextNode(outcome);
    var breadType = document.createElement("div");
    breadType.appendChild(breadTypeNode);
    breadType.setAttribute("id", "bread");

    //APPENDS THE ELEMENT TO THE DATA BOX
    data.appendChild(breadType);
    data.appendChild(imgPathBread);
}

//FUNCTION RETURNS BOTH OUTCOMES INSIDE ONE ELEMENT
var calcButton = document.getElementById("calcButton");

function finalCalc(){
    //APPENDS CHEESE AND BREAD TEXT TO THE FINAL RESULT 
    var finalCheese = document.getElementById("cheese").innerHTML;
    var finalBread = document.getElementById("bread").innerHTML;
    var resultBox = document.getElementById("finalResult");
    resultBox.innerHTML = finalCheese + " on " + finalBread + "<br>";

    //APPENDS THE CORRESPONDING IMG PATHING TO EMPTY IMGS FOR THE CHEESE AND BREAD
    var finalImg1 = document.getElementsByClassName("finalImg");
    var cheeseImg = document.getElementById("imgPathCheese").innerHTML;
    finalImg1[0].setAttribute("src", cheeseImg);

    var breadImg = document.getElementById("imgPathBread").innerHTML;
    finalImg1[1].setAttribute("src", breadImg);
}
calcButton.addEventListener("click", finalCalc);



//THIS CONTRUCTOR IS CALLED TO DISPLAY NEW QUESTIONS AND HIDE THE OLD ONES
function backForwardConstructor(oldQ, newQ, firstStyle, secondStyle){
    this.oldQ = oldQ;
    this.newQ = newQ;
    this.firstStyle = firstStyle;
    this.secondStyle = secondStyle;
    this.forward = function(oldQ, newQ, firstStyle, secondStyle){
        var hidePage = document.getElementById(oldQ);
        var showPage = document.getElementById(newQ);
        hidePage.style.display = firstStyle;
        showPage.style.display = secondStyle;
    }
    
}

var forwardMethod = new backForwardConstructor();
//THIS CONSTRUCTOR ASSIGNS THE FORWARD METHODS TO THE DIFFERENT SETS OF BUTTONS
function assignForward(buttons, x, y){
    this.buttons = buttons;
    this.x = x;
    this.y = y;
    this.assign = function(buttons, x, y){
        var buttons = document.getElementsByClassName(buttons);
        for(i = 0; i < buttons.length; i++){ 
            buttons[i].addEventListener("click", function(){
               forwardMethod.forward(x, y, "none", "block");
            });
        }
    }   
}

var assignMethod = new assignForward();
//CALLING THE CONSTRUCTOR WITH THE VALUES OF WHAT TO HIDE AND SHOW

/*.assign TAKES A VARIABLE OF THE ELEMENT/S TO BE CLICKED, THEN THE 
ID OF THE ELEMENT TO HIDE, THEN THE ONE TO SHOW*/
assignMethod.assign("startButton", "splash", "q1");
assignMethod.assign("b1", "q1", "q2");
assignMethod.assign("b2", "q2", "q3");
assignMethod.assign("b3", "q3", "q4");
assignMethod.assign("b4", "q4", "finalContainer");
assignMethod.assign("calcButton", "finalContainer", "tryAgain");
assignMethod.assign("backToStart", "tryAgain", "splash");


/* REMOVES ALL DATA FROM THE DATA ELEMENT FOR WHEN THE USER CLICKS TRY AGAIN,
 THE RESULT DISAPPEARS AND THE FIRST QUESTION IS ASKED AGAIN WITH NO DATA FROM 
 THE PREVIOUS ATTEMPT */
function clearData(){
   
   var dataBox = document.getElementById("data");
   while (dataBox.firstChild) {
    //The list is LIVE so it will re-index each call
    dataBox.removeChild(dataBox.firstChild);
    }
}
var tryAgain = document.getElementById("tryAgain");
tryAgain.addEventListener("click", clearData);













/*
    var finalContainer = document.getElementById("finalContainer");
    finalContainer.style.display = "none";

    /*var backToStart = document.createElement("button");
    backToStart.setAttribute("class", "backToStart");
    backToStart.innerHTML = "try again";

    var tryAgain = document.getElementById("tryAgain");
    tryAgain.appendChild(backToStart);*/



/*for(i = 0; i < dataBox.children.length; i++){
        
    
        dataBox.removeChild(dataBox.childNodes[i]);
    }
    console.log(dataBox.children.length);*/

    /*
    var dataBox = document.getElementById("dataContainer");
    dataBox.removeChild(dataBox.children);
    console.log(dataBox.children.length);

    var data = document.createElement("div");
    var dataContainer = document.getElementById("dataContainer");
    data.setAttribute("id", "data");
    dataContainer.appendChild(data);
    */




/*q1Buttons.addEventListener("click", function(){
    forwardMethod.forward("q1", "q2", "none", "block");
})

/*
function calcPrototype(
    FIRST_ANSWER,
    SEC_ANSWER,

    Q1_POS_1,
    Q2_POS_1,
    OUTCOME_1_CONTENT,

    Q1_POSS_2,
    Q2_POSS_2,
    OUTCOME_2_CONTENT,

    Q1_POSS_3,
    Q2_POSS_3,
    OUTCOME_3_CONTENT,

    Q1_POSS_4,
    Q2_POSS_4,
    OUTCOME_4_CONTENT,

    Q1_POSS_5,
    Q2_POSS_5,
    OUTCOME_5_CONTENT,

    Q1_POSS_6,
    Q2_POSS_6,
    OUTCOME_6_CONTENT,

    Q1_POSS_7,
    Q2_POSS_7,
    OUTCOME_7_CONTENT,

    Q1_POSS_8,
    Q2_POSS_8,
    OUTCOME_8_CONTENT,

    Q1_POSS_9,
    Q2_POSS_9,
    OUTCOME_9_CONTENT
){
    this.FIRST_ANSWER = FIRST_ANSWER;
    this.SEC_ANSWER = SEC_ANSWER;

    this.Q1_POS_1 = Q1_POS_1;
    this.Q2_POS_1 = Q2_POS_1;
    this.OUTCOME_1_CONTENT = OUTCOME_1_CONTENT;

    this.Q1_POSS_2 = Q1_POSS_2;
    this.Q2_POSS_2 = Q2_POSS_2,
    this.OUTCOME_2_CONTENT = OUTCOME_2_CONTENT;

    this.Q1_POSS_3 = Q1_POSS_3;
    this.Q2_POSS_3 = Q2_POSS_3;
    this.OUTCOME_3_CONTENT = OUTCOME_3_CONTENT;

    this.Q1_POSS_4 = Q1_POSS_4;
    this.Q2_POSS_4 = Q2_POSS_4;
    this.OUTCOME_4_CONTENT = OUTCOME_4_CONTENT;

    this.Q1_POSS_5 = Q1_POSS_5;
    this.Q2_POSS_5 = Q2_POSS_5;
    this.OUTCOME_5_CONTENT = OUTCOME_5_CONTENT;

    this.Q1_POSS_6 = Q1_POSS_6;
    this.Q2_POSS_6 = Q2_POSS_6;
    this.OUTCOME_6_CONTENT = OUTCOME_6_CONTENT;

    this.Q1_POSS_7 = Q1_POSS_7;
    this.Q2_POSS_7 = Q2_POSS_7;
    this.OUTCOME_7_CONTENT = OUTCOME_7_CONTENT;

    this.Q1_POSS_8 = Q1_POSS_8;
    this.Q2_POSS_8 = Q2_POSS_8;
    this.OUTCOME_8_CONTENT = OUTCOME_8_CONTENT;

    this.Q1_POSS_9 = Q1_POSS_9;
    this.Q2_POSS_9 = Q2_POSS_9
    this.OUTCOME_9_CONTENT = OUTCOME_9_CONTENT;
}
*/
/*
function outcomeConstructor(Q1_POS, Q2_POS, OUTCOME){
    this.Q1_POS = Q1_POS;
    this.Q2_POS = Q2_POS;
    this.OUTCOME = OUTCOME;
}

var outcome_1 = new outcomeConstructor("1a", "2a", "im the 1c 2c outcome");
*/

/*
PROPERTIES NEEDED FOR PROTOTYPE
     FIRST_ANSWER,
    SEC_ANSWER,

    Q1_POS_1,
    Q2_POS_1,
    OUTCOME_1_CONTENT,

    Q1_POSS_2,
    Q2_POSS_2,
    OUTCOME_2_CONTENT,

     Q1_POSS_3,
    Q2_POSS_3,
    OUTCOME_3_CONTENT,

     Q1_POSS_4,
    Q2_POSS_4,
    OUTCOME_4_CONTENT,

     Q1_POSS_5,
    Q2_POSS_5,
    OUTCOME_5_CONTENT,

     Q1_POSS_6,
    Q2_POSS_6,
    OUTCOME_6_CONTENT,

     Q1_POSS_7,
    Q2_POSS_7,
    OUTCOME_7_CONTENT,

     Q1_POSS_8,
    Q2_POSS_8,
    OUTCOME_8_CONTENT,

     Q1_POSS_9
    Q2_POSS_9,
    OUTCOME_9_CONTENT,

    
*/ 

