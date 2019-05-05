var context = canvas.getContext("2d");
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var counter =0;
var life;
var isFirstRun= true;
var memo = new Array();
var memoForZero = new Array();
memo.push(-1);
memo.push(-1);
memo.push(-1);
memo.push(-1);
memo.push(-1);
memo.push(-1);
memoForZero.push(0);
memoForZero.push(0);
memoForZero.push(9);
memoForZero.push(9);
memoForZero.push(0);
memoForZero.push(9);

//image of humburger
var humbur = new Image();
humbur.src = "humbur.png";

//var for the drugs
var drugs = new Image();
drugs.src = "drugs.png";

//boolean for humbur
var drawHambur= true;
//var for the lastCordinatesMonster
var lastXMonst=0;
var lastYMonst=0;

//object for the monster
function Monster(x, y, picture){
    this.x = x;
	this.y = y;
	this.picture= picture;
	
}

//images of monsters
var monst1 = new Image();
monst1.src = "mon1.png";

var monst2 = new Image();
monst2.src = "mon2.png";

var monst3 = new Image();
monst3.src = "mon3.png";

var monster1 = new Monster(0,0,monst1);
var monster2 = new Monster(0,9,monst2);
var monster3 = new Monster(9,9,monst3);



//vars for the game's buttons
var upButton;
var downButton;
var leftButton;
var rightButton;

//var for the pacman direction
var directPacman;

//vars for the balls' color
var ballsColor5;
var ballsColor15;
var ballsColor25;

//var for num of balls
var numOfBalls;

//var for num of monsters
var numOfMonsters;

var randomCheckBox;
var colorArray = new Array();

//var for game time
var gameTime;

//vars for the user's login
var uname;
var password;

//array for the checkUser
var users = new Array();
users.push(new User("a","a"));

function User(userName, password){
    this.userName = userName;
    this.password = password;
}

//music
var x = document.getElementById("myAudio"); 

hideWindows();
//Start();

function register(){
    
    hideWindows();
    //change*********************************&&&&&&&&&&&&&&&&&&&&&************************
    $("#Welcome").hide();
    document.getElementsByClassName("val_uname").value="";
    document.getElementsByName("password").value="";
    document.getElementsByName("fname").value="";
    document.getElementsByName("lname").value="";
    document.getElementsByName("email").value="";
    document.getElementsByName("bday").value="";

    $("#Register").show();
 }

 function hideWindows(){

    $("#Definitions").hide();
    $("#Game").hide();
    $("#Register").hide();
    $("#Login").hide();
    $("#About").hide();

 }

 function chooseKeys(){

    $('#target').click(function(event) { alert('Handler for .click() called.');});

 }
 

 function checkUser(){

    uname= document.getElementById("uname1").value;
    password= document.getElementById("pword1").value;

    var found = false;
    for (let index = 0; index < users.length && !found; index++) {
        if(uname== users[index].userName && password== users[index].password){

            found= true;

            hideWindows();
            $("#Welcome").hide();
            $("#Definitions").show();
            //assignment to the user name field
            usern.value = uname;
          
            //document.getElementById("usern").value= uname;

        
        }
        
    }
    if(!found){
        window.alert("Error: Unknown User");
    }
   
}

function setUserName(){

    document.getElementById("usern").value= uname;
}

function setUpButton(event){


    upButton = event;
    document.getElementById("up").value= upButton.key;

}

function setDownButton(event){

    downButton = event;
    document.getElementById("Down").value= downButton.key;
    
}

function setLeftButton(event){

    leftButton = event;
    document.getElementById("Left").value= leftButton.key;
    
}

function setRightButton(event){

    rightButton = event;
    document.getElementById("Right").value= rightButton.key;
    
}

//change*********************************&&&&&&&&&&&&&&&&&&&&&&&***********************
 function login(){
    hideWindows();
    $("#Welcome").hide();
    document.getElementById("uname1").value="";
    document.getElementById("pword1").value="";
    $("#Login").show();
 }

 function setColor5(event){
    ballsColor5 = event.value;
 }
 function setColor15(event){
    ballsColor15 = event.value;
 }
 function setColor25(event){
    ballsColor25 = event.value;
 }

 function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

 function collectData() {
 
        // numOfBalls = getRandomArbitrary(60,90);
        // numOfMonsters =  getRandomArbitrary(1,3);
        // gameTime = getRandomArbitrary(60,100);
       

    randomCheckBox = document.getElementById("random");
    numOfBalls = document.getElementById("balls").value;
    numOfMonsters = document.getElementById("monsters").value;
    /* ballsColor5= document.getElementById("colorChosen5").value;     
    ballsColor15= document.getElementById("colorChosen15").value;
    ballsColor25= document.getElementById("colorChosen25").value; */
    gameTime = document.getElementById("time").value;
    
    
    //change*******************************************&&&&&&&&&&&&&&&&&&&&&&&&&&&&************8
	var error= false;
    drawHambur = true;
    life=3;
    lblLife.value = 3;
  
    
    //check the whole fields are full
    // var numBalls = document.getElementById("balls");
    // var selected= numBalls.options[numBalls.selectedIndex].value;
    // console.log(numBalls.value);
    
    if(randomCheckBox.checked=== true){
        
       playAudio();
       Start();
       return;
    }

    if(numOfBalls==null || numOfBalls==""|| numOfMonsters=="" || gameTime=="" || document.getElementById("up").value==""||
    document.getElementById("Down").value==""|| document.getElementById("Left").value==""||
    document.getElementById("Right").value==""|| ballsColor5==null||
    ballsColor15==null||ballsColor25==null){

        window.alert("Error: All the fields must be full");
        error= true;
    
    //check time is more than 60 sec
    }else if(gameTime < 60 && !error){
         
        window.alert("Error: Please choose time higher than 60 seconds");
        error= true;

    }

    //num of balls 50-90
    else if(!(numOfBalls<=90 && numOfBalls>=50)){
        
        window.alert("Error: Please choose num of balls from 50-90");
        error= true;
    }

    //num of monsters
    else if(!(numOfMonsters<=3 && numOfMonsters>=1)){
        
        window.alert("Error: Please choose num of monsters from 1-3");
        error= true;
    }


    if(!error)
    {

       playAudio();
        Start();
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


function fillRandomFields(){
    
    randomCheckBox = document.getElementById("random");
    if(randomCheckBox.checked == true){

         document.getElementById("up").value= "ArrowUp";
        document.getElementById("Down").value= "ArrowDown";
        document.getElementById("Left").value= "ArrowLeft";
        document.getElementById("Right").value= "ArrowRight";
        document.getElementById("balls").value= getRandomArbitrary(60,90);

        // RandomColors = new Array();
        // RandomColors.push("black");
        // RandomColors.push("yellow");
        // RandomColors.push("red");
        // RandomColors.push("blue");
        // RandomColors.push("green");
        // RandomColors.push("pink");
        // RandomColors.push("orange");
        // RandomColors.push("gray");
        // RandomColors.push("brown");
        // RandomColors.push("gold");
        // RandomColors.push("lime");
        // RandomColors.push("navy");
        // RandomColors.push("olive");
        // RandomColors.push("plum");
        // RandomColors.push("silver");
        // i = getRandomInt(14);
        // document.getElementById("colorChosen5").value = RandomColors[getRandomInt(14)];
        // i = getRandomInt(14);
        // document.getElementById("colorChosen15").value = RandomColors[getRandomInt(14)];
        // i = getRandomInt(14);
        // document.getElementById("colorChosen25").value = RandomColors[getRandomInt(14)];

        document.getElementById("time").value= getRandomArbitrary(60,100);

        document.getElementById("monsters").value= getRandomArbitrary(1,3);
     }
}  


jQuery(function($) {
    var validation_holder;
    
    $("form#register_form input[name='submit']").click(function() {
    
    var validation_holder = 0;
    
        var uname           = $("form#register_form input[name='username']").val();
        var fname           = $("form#register_form input[name='fname']").val();
        var lname           = $("form#register_form input[name='lname']").val();
        var email           = $("form#register_form input[name='email']").val();
        var email_regex     = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check    
        var password        = $("form#register_form input[name='password']").val(); 
        var password_regex  = /^[a-zA-Z0-9]+$/;
        var birth           = $("form#register_form input[name='bday']").val(); 


        /* validation start */  
        if(uname == "") {
            $("span.val_uname").html("This field is required.").addClass('validate');
            validation_holder = 1;
        } else {
            $("span.val_uname").html("");
            }
        if(fname == "") {
            $("span.val_fname").html("This field is required.").addClass('validate');
            validation_holder = 1;
        } else {
            var x= fname.match(/\d+/g);
            if(x != null){
                $("span.val_fname").html("First name should not contains numbers.").addClass('validate');
                validation_holder = 1;
            }else{
                $("span.val_fname").html("");
            }       
        }
              
        if(lname == "") {
            $("span.val_lname").html("This field is required.").addClass('validate');
            validation_holder = 1;
        } else {
            var x= fname.match(/\d+/g);
            if(x != null){
                $("span.val_lname").html("Last name should not contains numbers.").addClass('validate');
                validation_holder = 1;
            }else{
                $("span.val_lname").html("");
            }       
        }
        if(email == "") {
            $("span.val_email").html("This field is required.").addClass('validate');
            validation_holder = 1;
        } else {
            if(!email_regex.test(email)){ // if invalid email
                $("span.val_email").html("Invalid Email!").addClass('validate');
                validation_holder = 1;
            } else {
                $("span.val_email").html("");
            }
        }
        if(password == "") {
            $("span.val_pass").html("This field is required.").addClass('validate');
            validation_holder = 1;
        } else {
            if(password.length<8){
                $("span.val_pass").html("Password must contain at least 8 characters").addClass('validate');
            }else if(!password_regex.test(password)){
                $("span.val_pass").html("Password must contain letters and numbers only").addClass('validate');
            }else{
                $("span.val_pass").html("");
            }
                
        }
     

        if(birth == "") {
            $("span.val_bday").html("This field is required.").addClass('validate');
            validation_holder = 1;
        } else {
                $("span.val_bday").html("");
        }
        
        //errors exist
        if(validation_holder == 1) { // if have a field is blank, return false
            $("p.validate_msg").slideDown("fast");
            return false;
        }  
        //no errors
        validation_holder = 0; // else return true
        //put the user in the userArray
        users.push(new User(uname, password));
        /* validation end */    
    }); // click end 

}); // jQuery End




//change 4 functions of menu **********************&&&&&&&&&&&&&&&&&&&&&&&&&*******************
function welcomeFromMenu(){

    window.clearInterval(interval);
    x.pause();
    hideWindows();
    $("#Welcome").show();
}

function registerFromMenu(){

    window.clearInterval(interval);
    x.pause();
    hideWindows();
    $("#Welcome").hide();
    document.getElementsByName("username").value="";
    document.getElementsByName("password").value="";
    document.getElementsByName("fname").value="";
    document.getElementsByName("lname").value="";
    document.getElementsByName("email").value="";
    document.getElementsByName("bday").value="";
    $("#Register").show();
  
}

function loginFromMenu(){

    window.clearInterval(interval);
    x.pause();
    hideWindows();
    $("#Welcome").hide();
    document.getElementById("uname1").value="";
    document.getElementById("pword1").value="";
    $("#Login").show();
  
    
}

function About()
{

    window.clearInterval(interval);
    x.pause();
    // hideWindows();
    // $("#Welcome").hide();
    var mymodel= document.getElementById('myModal');
    var span= document.getElementsByClassName("close")[0];
    mymodel.style.display= "block";
    //$("#myModal").modal({show: true});

    span.onclick= function(){
        mymodel.style.display= "none";
    }

    window.onclick= function(event){
        if(event.target== mymodel){
            mymodel.style.display= "none";
        
        }
    }

    $(document).keydown(function(event){
        if(event.keyCode==27){
            mymodel.style.display= "none";
        }
    });
    $("#About").show();

}


function Start() {
    $("#Welcome").hide();
    hideWindows();
    $("#Game").show();
    board = new Array();
    score = 0;
    pac_color = "yellow";
    var cnt = 100;
    var food_remain = numOfBalls;
    var pacman_remain = 1;
    start_time = new Date();
    for (var i = 0; i < 10; i++) {
        board[i] = new Array();
        //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
        for (var j = 0; j < 10; j++) {
            // if (i===0 && j ===0){ // initial cordinates for monsters
            //     board[i][j] = 9;
            //     continue;
            // }
            // if (i===9 && j===9){ // initial cordinates for monsters
            //     board[i][j] = 8;
            //     continue;
            // }
            // if (i===0 && j===9){ // initial cordinates for monsters
            //     board[i][j] = 7;
            //     continue;
            //}
            if ((i === 3 && j === 3) || (i === 3 && j === 4) || (i === 3 && j === 5) || (i === 6 && j === 1) || (i === 6 && j === 2)) {
                board[i][j] = 4;
            } else {
                var randomNum = Math.random();
                if (randomNum <= 1.0 * food_remain / cnt) {
                    food_remain--;
                    board[i][j] = 1;
                // } else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
                //     shape.i = i;
                //     shape.j = j;
                //     pacman_remain--;
                //     board[i][j] = 2;
                } else {
                    board[i][j] = 0;
                }
                cnt--;
            }
        }
    }
    
    //init for the pacman position
    var emptyTemp = findRandomEmptyCell(board);
    shape.i = emptyTemp[0];
    shape.j = emptyTemp[1];
    pacman_remain--;
	
	
    
    //check if "random" selected
    if(randomCheckBox.checked == false){
    initColorArray();
    }
    else{
        initColorArrayRandom();
    }
    while (food_remain > 0) {
        var emptyCell = findRandomEmptyCell(board);
        board[emptyCell[0]][emptyCell[1]] = 1;
        food_remain--;
    }
    keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.code] = true;
    }, false);
    addEventListener("keyup", function (e) {
        keysDown[e.code] = false;
    }, false);
	interval = setInterval(UpdatePosition, 500);
	// interval = setInterval(findAndUpdatePositionMonst, 1000);
	// interval = setInterval(moveMonster, 1000);
}


function findRandomEmptyCell(board) {
    var i = Math.floor((Math.random() * 9) + 1);
    var j = Math.floor((Math.random() * 9) + 1);
    while (board[i][j] !== 0) {
        i = Math.floor((Math.random() * 9) + 1);
        j = Math.floor((Math.random() * 9) + 1);
    }
    return [i, j];
}

/**
 * @return {number}
 */
function GetKeyPressed() {
    
    //check if "random" selected
    if(randomCheckBox){

        if (keysDown['ArrowUp']) {
            return 1;
        }
        if (keysDown['ArrowDown']) {
            return 2;
        }
        if (keysDown['ArrowLeft']) {
            return 3;
        }
        if (keysDown['ArrowRight']) {
            return 4;
        }

    }else{

        if (keysDown[upButton.code]) {
            return 1;
        }
        if (keysDown[downButton.code]) {
            return 2;
        }
        if (keysDown[leftButton.code]) {
            return 3;
        }
        if (keysDown[rightButton.code]) {
            return 4;
        }

    }
 
}


function initColorArray(){
    var colorsByNumbers = new Array();
    var index =0;
    colorsByNumbers.push(ballsColor5); /// color 1 - the most
    colorsByNumbers.push(ballsColor15); // color 2
    colorsByNumbers.push(ballsColor25); // color 3 - the least 
    var ballNumbers = new Array();
    ballNumbers.push(Math.floor(numOfBalls * 0.6)); // num5 * 0.6
    ballNumbers.push(Math.floor(numOfBalls * 0.3)); // num15 * 0.3
    ballNumbers.push(Math.floor(numOfBalls * 0.1)); // num25 * 0.1

    for (var i = 0; i < 10; i++) {
        colorArray[i] = new Array();
}
for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (board[i][j]==1){
                index = getRandomInt(3);
                while (ballNumbers[index]<=0){
                    index = getRandomInt(3);
                }
                colorForBalls = colorsByNumbers[index];
                colorArray[i][j] = colorForBalls;
                ballNumbers[index] = ballNumbers[index]-1; 
            }
        }
    }

}

function initColorArrayRandom(){
    var i =0;
    RandomColors = new Array();
    RandomColors.push("black");
    RandomColors.push("yellow");
    RandomColors.push("red");
    RandomColors.push("blue");
    RandomColors.push("green");
    RandomColors.push("pink");
    RandomColors.push("orange");
    RandomColors.push("gray");
    RandomColors.push("brown");
    RandomColors.push("gold");
    RandomColors.push("lime");
    RandomColors.push("navy");
    RandomColors.push("olive");
    RandomColors.push("plum");
    RandomColors.push("silver");
    i = getRandomInt(14);
    ballsColor5 = RandomColors[getRandomInt(14)];
    i = getRandomInt(14);
    ballsColor15 = RandomColors[getRandomInt(14)];
    i = getRandomInt(14);
    ballsColor25 = RandomColors[getRandomInt(14)];
    
    while(ballsColor5==ballsColor15 || ballsColor15 == ballsColor25|| ballsColor15==ballsColor25 ){
    ballsColor5 = RandomColors[getRandomInt(14)];
    ballsColor15 = RandomColors[getRandomInt(14)];
    ballsColor25 = RandomColors[getRandomInt(14)];
    }

    var colorsByNumbers = new Array();
    var index =0;
    colorsByNumbers.push(ballsColor5); /// color 1 - the most
    colorsByNumbers.push(ballsColor15); // color 2
    colorsByNumbers.push(ballsColor25); // color 3 - the least 
    var ballNumbers = new Array();
    ballNumbers.push(Math.floor(numOfBalls * 0.6)); // num5 * 0.6
    ballNumbers.push(Math.floor(numOfBalls * 0.3)); // num15 * 0.3
    ballNumbers.push(Math.floor(numOfBalls * 0.1)); // num25 * 0.1

    for (var i = 0; i < 10; i++) {
        colorArray[i] = new Array();
}
for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (board[i][j]==1){
                index = getRandomInt(3);
                while (ballNumbers[index]<=0){
                    index = getRandomInt(3);
                }
                colorForBalls = colorsByNumbers[index];
                colorArray[i][j] = colorForBalls;
                ballNumbers[index] = ballNumbers[index]-1; 
            }
        }
    }

}

function Draw() {
            context.clearRect(0, 0, canvas.width, canvas.height); //clean board
            lblScore.value = score;
            lblTime.value = time_elapsed;
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    var center = new Object();
                    center.x = i * 60 + 30;
                    center.y = j * 60 + 30;
                    if (board[i][j] === 2) { // Pacman Draw
                            
						//draw pacman according to direction pressed
						if(GetKeyPressed()!=null){
							directPacman = GetKeyPressed();
						}

						//UP
						if(directPacman==1){

							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI + Math.PI, 1.85 * Math.PI + Math.PI); 
							context.lineTo(center.x, center.y);
							context.fillStyle = "rgb(247, 211, 144)"; 
							context.fill();
							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI - Math.PI/2, 1.85 * Math.PI - Math.PI/2); 
							context.lineTo(center.x, center.y);
							context.fillStyle = pac_color;
							context.fill();
							context.beginPath();
							context.arc(center.x + 15, center.y - 5, 5, 0, 2 * Math.PI); 
							context.fillStyle = "black"; 
							context.fill();

						}

						//DOWN
						else if(directPacman==2){

							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI + Math.PI, 1.85 * Math.PI + Math.PI); 
							context.lineTo(center.x, center.y);
							context.fillStyle = "rgb(247, 211, 144)"; 
							context.fill();
							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI + Math.PI/2, 1.85 * Math.PI + Math.PI/2); 
							context.lineTo(center.x, center.y);
							context.fillStyle = pac_color; 
							context.fill();
							context.beginPath();
							context.arc(center.x + 15, center.y + 5, 5, 0, 2 * Math.PI); 
							context.fillStyle = "black"; 
							context.fill();

						}

						//LEFT
						else if(directPacman==3){

							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); 
							context.lineTo(center.x, center.y);
							context.fillStyle = "rgb(247, 211, 144)"; 
							context.fill();
							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI + Math.PI, 1.85 * Math.PI + Math.PI); 
							context.lineTo(center.x, center.y);
							context.fillStyle = pac_color; 
							context.fill();
							context.beginPath();
							context.arc(center.x - 5, center.y -15, 5, 0, 2 * Math.PI); 
							context.fillStyle = "black"; 
							context.fill();

						}

						//RIGHT
						else if(directPacman==4){

							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
							context.lineTo(center.x, center.y);
							context.fillStyle = pac_color; //color
							context.fill();
							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); 
							context.lineTo(center.x, center.y);
							context.fillStyle = pac_color; 
							context.fill();
							context.beginPath();
							context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); 
							context.fillStyle = "black"; 
							context.fill();

						}


						else{

							context.beginPath();
							context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
							context.lineTo(center.x, center.y);
							context.fillStyle = pac_color; //color
							context.fill();
							context.beginPath();
							context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
							context.fillStyle = "black"; //color
							context.fill();


						} 
                                    

                    } else if (board[i][j] === 1) { // Food
                                    context.beginPath();
                                    context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                                    context.fillStyle = colorArray[i][j]; //color
                                    context.fill();
                    } else if (board[i][j] === 4) { // Wall
                                	context.beginPath();
                                    context.rect(center.x - 30, center.y - 30, 60, 60);
                                    context.fillStyle = "grey"; //color
					 
									context.fill();
					}				
                    // }  else if (board[i][j] === 9) { // Monster
                    //                 context.drawImage(monst1,0 , 0, 967, 1111, i*60, j*60, 50, 50);
                    // } 
                    // else if (board[i][j] === 8 && numOfMonsters!=1) { // Monster
                    //                 context.drawImage(monst2,0 , 9, 967, 1111, i*60, j*60, 50, 50);
                    // } 
                    // else if (board[i][j] === 7 && numOfMonsters==3) { // Monster
                    //                 context.drawImage(monst3,9 , 9, 967, 1111, i*60, j*60, 50, 50);
                    // } 
                }
            }
}

function UpdatePosition() {

    board[shape.i][shape.j] = 0;
    var x = GetKeyPressed();
    if (x === 1) {
        if (shape.j > 0 && board[shape.i][shape.j - 1] !== 4) {
            shape.j--;
        }
    }
    if (x === 2) {
        if (shape.j < 9 && board[shape.i][shape.j + 1] !== 4) {
            shape.j++;
        }
    }
    if (x === 3) {
        if (shape.i > 0 && board[shape.i - 1][shape.j] !== 4) {
            shape.i--;
        }
    }
    if (x === 4) {
        if (shape.i < 9 && board[shape.i + 1][shape.j] !== 4) {
            shape.i++;
        }
    }
    
    

    if (board[shape.i][shape.j] === 1 && colorArray[shape.i][shape.j]=== ballsColor5) {
        score= score+5;
    }
    
    if (board[shape.i][shape.j] === 1 && colorArray[shape.i][shape.j]=== ballsColor15) {
        score= score+15;
    }

    if (board[shape.i][shape.j] === 1 && colorArray[shape.i][shape.j]=== ballsColor25) {
        score= score+25;
    }

    board[shape.i][shape.j] = 2;

    var currentTime = new Date();
    time_elapsed = (currentTime - start_time) / 1000;
	if (time_elapsed >= gameTime) {
        x.pause();
		window.clearInterval(interval);
		if(score<150){
			window.alert("You can do better "+score+" points" );
		}else{
			window.alert("We have a Winner!!!" );
		}
        
    } 
    // if (score >= 20 && time_elapsed <= 10) {
    //     pac_color = "green";
    // }
    /////////////////////////////////////////////////////////////update final score line down
    if (score === 500) {
        // window.clearInterval(interval);
        // window.alert("Game completed");
    } else {
		Draw();


		if(numOfMonsters==1){

			if(isFirstRun){

				//draw the humbur
				context.drawImage(humbur, 9*60, 0*60, 60, 60);
				//draw the drugs
				context.drawImage(drugs, 9*60, 9*60, 40, 40);
				moveMonster(monster1,shape.i,shape.j);
				findAndUpdatePositionMonst(monster1, shape.i,shape.j);
				isFirstRun= false;

			}
			else{
                if(drawHambur){
					drawHumbur();		
				}
				drawDrugs();
				findAndUpdatePositionMonst(monster1, shape.i,shape.j);
				moveMonster(monster1, shape.i,shape.j);

			}

		}

		if(numOfMonsters==2){

			if(isFirstRun){

				//draw the humbur
				context.drawImage(humbur, 9*60, 0*60, 60, 60);
				//draw the drugs
				context.drawImage(drugs, 9*60, 9*60, 40, 40);

				moveMonster(monster1,shape.i,shape.j);
				moveMonster(monster2,shape.i,shape.j);
				findAndUpdatePositionMonst(monster1, shape.i,shape.j);
				findAndUpdatePositionMonst(monster2, shape.i,shape.j);
				isFirstRun= false;

			}
			else{

				if(drawHambur){
					drawHumbur();		
				}
				drawDrugs();
				findAndUpdatePositionMonst(monster1, shape.i,shape.j);
				findAndUpdatePositionMonst(monster2, shape.i,shape.j);
				moveMonster(monster1,shape.i,shape.j);
				moveMonster(monster2,shape.i,shape.j);

			}

		}

		if(numOfMonsters==3){

			if(isFirstRun){

				//draw the humbur
				context.drawImage(humbur, 9*60, 0*60, 60, 60);
				//draw the drugs
				context.drawImage(drugs, 9*60, 9*60, 40, 40);
				moveMonster(monster1,shape.i,shape.j);
				moveMonster(monster2,shape.i,shape.j);
				moveMonster(monster3,shape.i,shape.j);
				findAndUpdatePositionMonst(monster1, shape.i,shape.j);
				findAndUpdatePositionMonst(monster2, shape.i,shape.j);
				findAndUpdatePositionMonst(monster3, shape.i,shape.j);
				isFirstRun= false;

			}
			else{

				if(drawHambur){
					drawHumbur();		
				}
				drawDrugs();
				findAndUpdatePositionMonst(monster1, shape.i,shape.j);
				findAndUpdatePositionMonst(monster2, shape.i,shape.j);
				findAndUpdatePositionMonst(monster3, shape.i,shape.j);
				moveMonster(monster1,shape.i,shape.j);
				moveMonster(monster2,shape.i,shape.j);
				moveMonster(monster3,shape.i,shape.j);


			}

		}
	}
	
}


function findAndUpdatePositionMonst(monster,pacX, pacY){

	var dUp=10000;
	var dDown=10000;
	var dLeft=10000;
	var dRight=10000;

		
		//up
		if(monster.y-1>=0 && board[monster.x][monster.y-1]!=4){

			dUp = Math.sqrt(Math.pow(monster.x-pacX,2)+Math.pow(monster.y-1-pacY,2));
		}
	
		//down
		if(monster.y+1<board.length && board[monster.x][monster.y+1]!=4){ 
	
			dDown = Math.sqrt(Math.pow(monster.x-pacX,2)+Math.pow(monster.y+1-pacY,2));
		}
	
		//left
		if(monster.x-1>=0 && board[monster.x-1][monster.y]!=4){
	
			dLeft = Math.sqrt(Math.pow(monster.x-1-pacX,2)+Math.pow(monster.y-pacY,2));
		}
	
		//right
		if(monster.x+1<board.length && board[monster.x+1][monster.y]!=4){
	
			dRight = Math.sqrt(Math.pow(monster.x+1-pacX,2)+Math.pow(monster.y-pacY,2));
		}

		var minimumDistance= Math.min(dUp, dDown, dLeft, dRight);

		//if pacman in close cell
		var ans= checkPacman(monster,pacX, pacY);
		if(ans != null && ans!= ""){

			minimumDistance= ans;
			
		}

		if(minimumDistance ===  dUp){
	
			monster.y= monster.y-1;
			
		}
		else if(minimumDistance=== dDown){
			
			monster.y= monster.y+1;
			
		}
		else if(minimumDistance ===dLeft){
			monster.x= monster.x-1;
			
		
		}
		else if(minimumDistance === dRight){
			monster.x= monster.x+1;
			
		}

		//if meet the pacman
		if(monster.x=== pacX && monster.y===pacY){		
			//moveMonster(monster,pacX, pacY);

			score = score-10;
			life--;

			
			if(life==0){ //GIME OVER
                
                lblLife.value = life;
                //life=3;
                x.pause();
				window.clearInterval(interval);
				window.alert("You Lost!");
				window.clearInterval(interval);
			


			}else{ //START OVER
				
				// board[monster.x][monster.y]=0;
				// board[pacY][pacX]=0;
				// board[pacX][pacY]=0;

				// var i = Math.floor((Math.random() * 9) + 1);
				// var j = Math.floor((Math.random() * 9) + 1);
				// while (board[i][j] == 4) {
				// 	i = Math.floor((Math.random() * 9) + 1);
				// 	j = Math.floor((Math.random() * 9) + 1);
				// }
				

				
				// pacX=i;
				// pacY=j;
				// board[pacX][pacY]=2;
                lblLife.value = life;
				board[shape.i][shape.j]=0;
				var empty = findRandomEmptyCell(board);
				board[empty[0]][empty[1]]=2;
				shape.i = empty[0];
				shape.j = empty[1];

				//bring the monsters back to corners
				monster1.x=0;
				monster1.y=0;
				monster2.x=0;
				monster2.y=9;
				monster3.x=9;
				monster3.y=9;
				//Draw();
				
	
			}
			

			
		}


}

function moveMonster(monster, pacX, pacY){

	//draw monster
	context.drawImage(monster.picture, 9,9,420,400, monster.x*60,monster.y*60,50,50);

}

function newGame(){


    window.clearInterval(interval);
    x.pause();
	monster1.x=0;
	monster1.y=0;
	monster2.x=0;
	monster2.y=9;
	monster3.x=9;
	monster3.y=9;

	isFirstRun=true;
	collectData();


}

function checkPacman(monster,pacX, pacY){

	var dUp= dUp;
	var dDown= dDown;
	var dLeft= dLeft;
	var dRight= dRight;

	if(monster.y-1>0 && board[monster.x][monster.y-1]==2){

		return dUp;
	}

	//down
	if(monster.y+1<board.length && board[monster.x][monster.y+1]==2){ 

		return dDown;
	}

	//left
	if(monster.x-1>0 && board[monster.x-1][monster.y]==2){

		return dLeft;
	}

	//right
	if(monster.x+1<board.length && board[monster.x+1][monster.y]==2){

		return dRight;
	}


}

function drawHumbur(){

	var x = Math.floor((Math.random() * 9) + 1);
	var y = Math.floor((Math.random() * 9) + 1);
	while (board[x][y] == 4 || board[x][y] == 2) {
		x = Math.floor((Math.random() * 9) + 1);
		y = Math.floor((Math.random() * 9) + 1);
	}
	context.drawImage(humbur, x*60, y*60, 60, 60);
	if(x===shape.i && y===shape.j){
		score= score+50;
		drawHambur= false;
	}


}

function drawDrugs(){

	var x = Math.floor((Math.random() * 9) + 1);
	var y = Math.floor((Math.random() * 9) + 1);
	while (board[x][y] == 4 || board[x][y] == 2 ) {
		x = Math.floor((Math.random() * 9) + 1);
		y = Math.floor((Math.random() * 9) + 1);
	}
	context.drawImage(drugs, x*60, y*60, 50, 50);


}




function playAudio() { 
  
            x.pause();
            x.play(); 
        
} 
        
