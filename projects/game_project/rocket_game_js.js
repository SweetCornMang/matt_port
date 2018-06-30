var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var a1Pos = Math.floor(Math.random() * 200) - 25;
var a2Pos = Math.floor(Math.random() * 200) + 175;
var a3Pos = Math.floor(Math.random() * 300);
var a4Pos = Math.floor(Math.random() * 450);
var a5Pos = Math.floor(Math.random() * 450);

function assets(imgSrc, x, y, w, h){
    this.imgSrc = imgSrc;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.makeAsset = function(){
        var node = document.createElement('img');
        node.src = imgSrc;
        return node;
        //console.log(node);
    }
}

var s = new assets('imgs/sky.jpg', 0, 0, canvas.width, canvas.height);
var r = new assets('imgs/rocket/rocket_img.png', canvas.width/12, canvas.height/2 - 25, 93, 45);
var a1 = new assets('imgs/tv/tv2.png', canvas.width + 70, a1Pos, 160, 110);
var a2 = new assets('imgs/tv/tv2.png', canvas.width + 150, a2Pos, 160, 110);
var a3 = new assets('imgs/tv/tv2.png', canvas.width + 10, a3Pos, 240, 180);
var a4 = new assets('imgs/tv/tv2.png', canvas.width + 250, a4Pos, 70, 50);
var a5 = new assets('imgs/tv/tv2.png', canvas.width + 450, a5Pos, 70, 50);

//OBJECTS IN GAME
var stars = s.makeAsset();
var rocket = r.makeAsset();
var ast1 = a1.makeAsset();
var ast2 = a2.makeAsset();
var ast3 = a3.makeAsset();
var ast4 = a4.makeAsset();
var ast5 = a5.makeAsset();


var a = [];// HOLDS ASTROID SPECS IN ARRAY FOR LATER
a.push(a1, a2, a3, a4, a5);

var a_imgs = [];// HOLDS ASTROID IMGS ELEMS IN ARRAY FOR LATER
a_imgs.push(ast1, ast2, ast3, ast4, ast5);

console.log(a_imgs.length);

//GAME LOOP REFRESH STUFF
var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
var paused = true;
var gameIsOver = false;
var score = 0;

window.onload = function(){
    mainMenu();

    //var setup = setInterval(refresh, 1000/fps);
    function refresh(){
        requestAnimationFrame(refresh);
        keypress(); 
        now = Date.now();
        delta = now - then; 

        if (delta > interval) { 
            then = now - (delta % interval);
            //console.log(r.y);

            if(!paused && gameIsOver === false){
                canvas.width = canvas.width;//MAKES ROCKET NOT REPEAT WHEN MOVED
                ctx.drawImage(stars, s.x, s.y, s.w, s.h);

                for(i = 0; i < 2; i++){
                    moveAstroid(a[i], 5 + i, -190);
                }
                moveAstroid(a[2], 4, -400);
                moveAstroid(a[3], 7, -70);
                moveAstroid(a[4], 8, -70);

                ctx.drawImage(rocket, r.x, r.y);
                for(i = 0; i < a_imgs.length; i++){//DRAWS ASTROIDS
                    
                    ctx.drawImage(a_imgs[i], a[i].x, a[i].y, a[i].w, a[i].h);
                    collisionDetection(r, a, i);
                }  

                if(gameIsOver === true){
                    resetMenu();
                }
                scoreCounter(); 
            }
        }
    }
    refresh();
}

var keyState = {};//FIGURES OUT WHICH KEY IS PRESSED (NO DELAY IN PRESS VS. HOLD KEY, REGULAR WAY HAS DELAY)

window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);

window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

//HANDLES MOVING THE SHIP WITH AROW KEYS
function keypress(){
    if(r.y <= 0){//TRUE WHEN ROCKET IS AT TOP
        if(keyState[40] || keyState[90]){
            r.y += 4;
        }
    } else if(r.y >= canvas.height - 46){
        /* TRUE WHEN ROCKET IS AT BOTTOM, 46 STOPS THE 
            ROCKET FROM GOING TOO FAR DOWN */
        if(keyState[38] || keyState[65]){
            r.y -= 4;
        }
    } else{//TRUE IF BOTTOM IS NEITHER TOP NOR BOTTOM
        if(keyState[38] || keyState[65]){
            r.y -= 4;
        } else if(keyState[40] || keyState[90]){
            r.y += 4;
            }
    }
    
}

window.addEventListener("keyup", pauseGame);
function pauseGame(e){
    if(e.keyCode === 80){
        paused = !paused;
        if(gameIsOver === true){
            resetVariables();
            gameIsOver = false;
        }
    }
}

function moveAstroid(obj, x_inc, y_reset){
    x_inc *= 2;
    obj.x -= x_inc;

    if(obj.x <= y_reset){
        if(obj === a[0]){
            obj.x = canvas.width + 70;
            obj.y = Math.floor(Math.random() * 200) - 25;
        } else if(obj === a[1]){
            obj.x = canvas.width + 150;
            obj.y = Math.floor(Math.random() * 200) + 175;
        } else if(obj === a[2]){
            obj.x = canvas.width + 10;
            obj.y = Math.floor(Math.random() * 300);
        } else if(obj === a[3]){
            obj.x = canvas.width + 250;
            obj.y = Math.floor(Math.random() * 450);
        } else {
            obj.x = canvas.width + 450;
            obj.y = Math.floor(Math.random() * 450);
        }
    }
}

function collisionDetection(obj_1, obj_2, i){
    
    if((obj_1.x + 12) < (obj_2[i].x + obj_2[i].w) 
        && obj_1.y < (obj_2[i].y + obj_2[i].h) 
        && obj_2[i].x < ((obj_1.x + 12) + obj_1.w) 
        && obj_2[i].y < (obj_1.y + obj_1.h))
        {
        gameOver();
    }
}

//window.addEventListener("keyup", gameOver);

function gameOver(e){
    //RESETS GAME, TO BE USED IN COLLISION DETECTION TO RESET GAME
        paused = !paused;
        gameIsOver = true;
}

function resetVariables(){
    a1Pos = Math.floor(Math.random() * 200) - 25;
    a2Pos = Math.floor(Math.random() * 200) + 175;
    a3Pos = Math.floor(Math.random() * 300);
    a4Pos = Math.floor(Math.random() * 430);
    a5Pos = Math.floor(Math.random() * 450);

    r.x = canvas.width/12;
    r.y = canvas.height/2 - 25;

    //ADD FOR LOOP AFTER GETTING FINAL IMAGES TO USE
    a1.x = canvas.width + 70;
    a1.y = a1Pos;

    a2.x = canvas.width + 150;
    a2.y = a2Pos;

    a3.x = canvas.width + 10;
    a3.y = a3Pos;

    a4.x = canvas.width + 250;
    a4.y = a4Pos;

    a5.x = canvas.width + 450;
    a5.y = a5Pos;
    
    score = 0;    
}



function scoreCounter(){

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(score, 5, 23);
    score++;
}

function mainMenu(){
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText('Space TVs', canvas.width/3, 100);

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText('Press P to begin', canvas.width/3 +  10, 400);

    ctx.drawImage(rocket, canvas.width/3 + 60, r.y - 20);
}

function resetMenu(){
    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width/4, 100, 350, 250);

    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.fillText('Game Over', canvas.width/4 + 70, 150);

    ctx.font = "20px Arial";
    ctx.fillText('Press p to reset', canvas.width/4 + 100, 210);

}







//ctx.stroke();
/*
var assets = {
    rocket: {
        src: 'imgs/the_rocket.png',
        x: canvas.width/12,
        y: canvas.height/2 - 25
    },  
}
var rocket = document.createElement('img');
rocket.src = assets.rocket.src; */