/*function searchTerm(){
	var x = document.getElementsByClassName("term");
	var y = document.getElementsByClassName("subject");
	var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}

function searchCourses(){
	var x = document.getElementsByClassName("subject");
	var y = document.getElementsByClassName("list");
	var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}

function course231Sections(){
	var x = document.getElementsByClassName("list");
	var y = document.getElementsByClassName("section231");
	var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}

function course332Sections(){
	var x = document.getElementsByClassName("list");
	var y = document.getElementsByClassName("section332");
	var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}

function backToTerm(){
	var x = document.getElementsByClassName("term");
	var y = document.getElementsByClassName("subject");
	var i;
	
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
}

function backToSubject(){
	var x = document.getElementsByClassName("subject");
	var y = document.getElementsByClassName("list");
	var i;
	
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
}

function backToList231(){
	var x = document.getElementsByClassName("list");
	var y = document.getElementsByClassName("section231");
	var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
}

function backToList332(){
	var x = document.getElementsByClassName("list");
	var y = document.getElementsByClassName("section332");
	var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }

	for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
}
*/

/*
function buttonRegister4523(){
	var newItem = document.createElement("li");
	var list = document.getElementById("approvedClasses");
	var title = document.getElementById("4523").nextElementSibling.innerHTML;

	var removeButton = document.createElement("button");
	var buttonText = document.createTextNode("remove");
	removeButton.className = "removeClassButton";

	var classInfoTextNode = document.createTextNode("4523" + " " + title);
	newItem.appendChild(classInfoTextNode);

	removeButton.appendChild(buttonText);
	newItem.appendChild(removeButton);

	list.appendChild(newItem);

	var dayAndTimeOne = document.getElementById("10:30T");
	var dayAndTimeTwo = document.getElementById("10:30Th");
	var dayOneTextNode = document.createTextNode("Emda 231")
	var dayTwoTextNode = document.createTextNode("Emda 231")
	dayAndTimeOne.appendChild(dayTwoTextNode);
	dayAndTimeTwo.appendChild(dayOneTextNode);
	

	function removeItem(){
		list.removeChild(newItem);
		dayAndTimeOne.removeChild(dayTwoTextNode);
		dayAndTimeTwo.removeChild(dayOneTextNode);
	}
	removeButton.addEventListener("click", removeItem);		
}

function buttonRegister5612(){
	var newItem = document.createElement("li");
	var list = document.getElementById("approvedClasses");
	var title = document.getElementById("5612").nextElementSibling.innerHTML;

	var removeButton = document.createElement("button");
	var buttonText = document.createTextNode("remove");
	removeButton.className = "removeClassButton";
	
	var classInfoTextNode = document.createTextNode("5612" + " " + title);
	newItem.appendChild(classInfoTextNode);

	removeButton.appendChild(buttonText);
	newItem.appendChild(removeButton);

	list.appendChild(newItem);

	var dayAndTimeOne = document.getElementById("8:30T");
	var dayAndTimeTwo = document.getElementById("8:30Th");
	var dayOneTextNode = document.createTextNode("Emda 231")
	var dayTwoTextNode = document.createTextNode("Emda 231")
	dayAndTimeOne.appendChild(dayTwoTextNode);
	dayAndTimeTwo.appendChild(dayOneTextNode);

	function removeItem(){
		list.removeChild(newItem);	
		dayAndTimeOne.removeChild(dayTwoTextNode);
		dayAndTimeTwo.removeChild(dayOneTextNode);
	}
	removeButton.addEventListener("click", removeItem);		
}

function buttonRegister1123(){
	var newItem = document.createElement("li");
	var list = document.getElementById("approvedClasses");
	var title = document.getElementById("1123").nextElementSibling.innerHTML;

	var removeButton = document.createElement("button");
	var buttonText = document.createTextNode("remove");
	removeButton.className = "removeClassButton";
	
	var classInfoTextNode = document.createTextNode("1123" + " " + title);
	newItem.appendChild(classInfoTextNode);

	removeButton.appendChild(buttonText);
	newItem.appendChild(removeButton);

	list.appendChild(newItem);

	var dayAndTimeOne = document.getElementById("1:30M");
	var dayAndTimeTwo = document.getElementById("1:30W");
	var dayOneTextNode = document.createTextNode("Emda 332")
	var dayTwoTextNode = document.createTextNode("Emda 332")
	dayAndTimeOne.appendChild(dayTwoTextNode);
	dayAndTimeTwo.appendChild(dayOneTextNode);

	function removeItem(){
		list.removeChild(newItem);
		dayAndTimeOne.removeChild(dayTwoTextNode);
		dayAndTimeTwo.removeChild(dayOneTextNode);	
	}
	removeButton.addEventListener("click", removeItem);	
}

function buttonRegister6577(){
	var newItem = document.createElement("li");
	var list = document.getElementById("approvedClasses");
	var title = document.getElementById("6577").nextElementSibling.innerHTML;

	var removeButton = document.createElement("button");
	var buttonText = document.createTextNode("remove");
	removeButton.className = "removeClassButton";
	
	var classInfoTextNode = document.createTextNode("6577" + " " + title);
	newItem.appendChild(classInfoTextNode);

	removeButton.appendChild(buttonText);
	newItem.appendChild(removeButton);

	list.appendChild(newItem);

	var dayAndTimeOne = document.getElementById("8:30T");
	var dayAndTimeTwo = document.getElementById("8:30Th");
	var dayOneTextNode = document.createTextNode("Emda 332")
	var dayTwoTextNode = document.createTextNode("Emda 332")
	dayAndTimeOne.appendChild(dayTwoTextNode);
	dayAndTimeTwo.appendChild(dayOneTextNode);

	function removeItem(){
		list.removeChild(newItem);	
		dayAndTimeOne.removeChild(dayTwoTextNode);
		dayAndTimeTwo.removeChild(dayOneTextNode);	
	}
	removeButton.addEventListener("click", removeItem);	
}
*/
function testBackForward(first, second, firstStyle, secondStyle){
	this.fist = first;
	this.second = second;
	this.firstStyle = firstStyle;
	this.secondStyle = secondStyle;
	this.clickButton = function (first, second, firstStyle, secondStyle){
		var x = document.getElementsByClassName(first);
		var y = document.getElementsByClassName(second);
		var i;
	
		for (i = 0; i < x.length; i++) {
			x[i].style.display = firstStyle;
		}
	
		for (i = 0; i < y.length; i++) {
			y[i].style.display = secondStyle;
		}
	}
}

function searchTerm(){
	var x = new testBackForward();
	x.clickButton("term","subject","none","block");
}

function searchCourses(){
	var x = new testBackForward();
	x.clickButton("subject","list","none","block");
}

function course231Sections(){
	var x = new testBackForward();
	x.clickButton("list","section231","none","block");
}

function course332Sections(){
	var x = new testBackForward();
	x.clickButton("list","section332","none","block");
}

function course347Sections(){
	var x = new testBackForward();
	x.clickButton("list","section347","none","block");
}



function backToTerm(){
	var x = new testBackForward();
	x.clickButton("term","subject","block","none");
}

function backToSubject(){
	var x = new testBackForward();
	x.clickButton("subject","list","block","none");
}

function backToList231(){
	var x = new testBackForward();
	x.clickButton("list","section231","block","none");
}

function backToList332(){
	var x = new testBackForward();
	x.clickButton("list","section332","block","none");
}

function backToList347(){
	var x = new testBackForward();
	x.clickButton("list","section347","block","none");
}


function testReg(crn, timeOne, timeTwo, className){
	this.crn = crn;
	this.timeOne = timeOne;
	this.timeTwo = timeTwo;
	this.className = className;
	this.makeItem = function (crn, timeOne, timeTwo, className){

		var newItem = document.createElement("li");
		var list = document.getElementById("approvedClasses");
		var title = document.getElementById(crn).nextElementSibling.innerHTML;
	
		var removeButton = document.createElement("button");
		var buttonText = document.createTextNode("remove");
		removeButton.className = "removeClassButton";
		
		var classInfoTextNode = document.createTextNode(crn + " " + title);
		newItem.appendChild(classInfoTextNode);
	
		removeButton.appendChild(buttonText);
		newItem.appendChild(removeButton);
	
		list.appendChild(newItem);
		
		var dayAndTimeOne = document.getElementById(timeOne);
		var dayAndTimeTwo = document.getElementById(timeTwo);
		var dayOneTextNode = document.createTextNode(className);
		var dayTwoTextNode = document.createTextNode(className);
		dayAndTimeOne.appendChild(dayTwoTextNode);
		dayAndTimeTwo.appendChild(dayOneTextNode);
	
		function removeItem(){
			list.removeChild(newItem);	
			dayAndTimeOne.removeChild(dayTwoTextNode);
			dayAndTimeTwo.removeChild(dayOneTextNode);	
		}
		removeButton.addEventListener("click", removeItem);
	}
}
var firstClassReg = new testReg();
function buttonReg4523(){
	firstClassReg.makeItem("4523","10:30T","10:30Th","Emda 231");
}

function buttonReg5612(){
	firstClassReg.makeItem("5612","8:30T","8:30Th","Emda 231");
}

function buttonReg6577(){
	firstClassReg.makeItem("6577","8:30T","8:30Th","Emda 423");
}

function buttonReg1123(){
	firstClassReg.makeItem("1123","1:30M","1:30W","Emda 432");
}

function buttonReg2234(){
	firstClassReg.makeItem("2234","3:30M","3:30W","Emda 347");
}

function buttonReg9909(){
	firstClassReg.makeItem("9909","8:30M","8:30W","Emda 347");
}

