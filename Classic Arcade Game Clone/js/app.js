
//Create a variable to set the interval..
var timer = setInterval(counttimer, 1000);
var hour;
var minute;
var seconds;
//Create a variable totalSeconds..
var totalSeconds =0;
//Create a variable score..
let score = 2;

//Create a function to calculate time..
function counttimer() {
   ++totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);
   //Using getElementById time mode in page index and time format..
   document.getElementById("timer").innerHTML =hour + ":" + minute + ":" + seconds;
}

 //stop the time ..
 function stoptime() {
  clearInterval(timer);
}

//Create a function restart..
function ReStart() {
   //restart timer..
   totalSeconds =0;
   //restart score..
   score =0;
   document.getElementById("score").innerHTML = score ;

}

// Enemies our player must avoid
//Create an Enemy class..
class Enemy{
    //The establishment of the Constructor receives parameters for the location of the enemy X and Y..
    constructor(x ,y)
    {
      //Use this to indicate the properties of the enemy..
      //The two variables x and y determine the position of the enemy in the game..
      //Speed determines enemy speed..
      //Set the enemy image from the images folder..
      this.x = x;
      this.y = y;
      //Use the random Math function to make the velocity random..
      this.speed = Math.random()* 300 +100;
      this.sprite = 'images/enemy-bug.png';
    }

//Update function..
//Take a parameter dt ..
 update(dt){
   //View the game canvas 505 Add a condition if the enemy movement is greater than 550 to ensure exit outside the framework of the game will reduce 100..
   if(this.x > 550){
      this.x = -100;
   }
   //multiply any movement by the dt parameter..
   this.x += this.speed *dt;
 }
  // Draw the enemy on the screen, required method for game..
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  }
}

//Create an Player class..
//In the same way we create an enemy class, we create the player's class..
class Player{
  //The establishment of the Constructor receives parameters for the location of the player X and Y..
   constructor(x , y)
   {
     //Use this to indicate the properties of the player..
     //The two variables x and y determine the position of the player in the game..
     //Set the enemy image from the player folder..
     this.x = x;
     this.y = y;
     this.sprite='images/char-horn-girl.png';
   }

    //Update function..
    //Take a parameter dt ..
    update(dt){
      //Add a check condition if the player has reached the water or not?..
      if(this.y < 0){
       //If the player reaches the water, increase the source by one..
       score += 1;
       document.getElementById("score").innerHTML = score ;
       //Reset the player's place to start..
       this.x = 200;
       this.y = 400;
       //The condition of the game stops..
       //So the sourz is equal to 10..
       //Call for time-stop function..
       //A call to the end result function..
       if(score == 10){
         theresult();
         stoptime();
       }
     }
    }
    // Draw the player on the screen, required method for game..
    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(direction){
      //Use the condition clause switch ، So the player doesn't come out of the game..
      //There are four instances of player movement right, left, up, down..
      //switch receives player's direction..
      switch (direction) {
        //We determine the coordinates using the printing statement , console.log(this.playerx) and console.log(this.playery)..
        //If the player's movement to the right and X-axis less than 400 increase Axis axis to the player by 101..
        //Note: Values 83 and 101 are based on the values in the engine.js canvas file..
        case 'right':
          if(this.x < 400){this.x += 101};
          break;
        //If the player moves left and the X-axis is greater than 0, the Axis axis of the player decreases by 101..
        case 'left':
          if(this.x > 0 ){this.x -= 101};
          break;
        //If the movement of the player up and the y-axis is greater than 0 decrease Axis player by 83..
        case 'up':
          if(this.y > 0){this.y -= 83};
          break;
        //If the player's movement down and the y-axis is less than 380 increase the Axis axis of the player by 83..
        case 'down':
          if(this.y < 380){this.y += 83};
          break;

        default:
          break;
      }
    }
}

// Now instantiate your objects..
// Place all enemy objects in an array called allEnemies..
// Place the player object in a variable called player..
let enemy1 = new Enemy (100 ,55);
let enemy2 = new Enemy (100 ,138);
let enemy3 = new Enemy (100 ,221);
let allEnemies = [enemy1 , enemy2 ,enemy3];
//Create a player variable and assign an ObjectGet from the player class..
let player = new Player (200 ,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//Create a crash test function..
function checkthecollision() {
  allEnemies.forEach(enemy => {
    //Create a distance variable to calculate the distance between the enemy and the player..
    let distance = getDistance(enemy , player);
    if(distance < 50){
      //In the event of a collision one source decreases..
      score -= score > 0 ? 1 : 0;
      document.getElementById("score").innerHTML = score ;
      //Reset the player's place to start..
      player.x = 200;
      player.y = 400;
      //A condition in the case of decreasing the sores to zero lose the player..
      if(score == 0){
        //A condition in the case of decreasing the sores to zero lose the player..
        theresult2();
        stoptime();
      }
    }

  })
}

//The function of calculating the distance between two points, based on the theory of Pythagoras..
//Take tow parameters..
function getDistance(object1 , object2) {
  //Define two variables..
  //Calculate the difference between the x-axis of the first object and the second object..
  //References : https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas..
  let a = object1.x - object2.x;
  let b = object1.y - object2.y;

  return Math.sqrt(a*a + b*b);
}

//Dialog function showing the final score of the player..
 function theresult() {
   //dialog ..
   let dialog = document.getElementById("dialog1");

   //Get the final time..
   let finaltime = document.getElementById("timer").innerHTML ;
   document.getElementById("time").innerHTML = finaltime;

   //Get the final number of attempts
   document.getElementById("scores").innerHTML = score;

   //Show Dialog..
   dialog.showModal();

  }

  //Dialog function showing the final score of the player..
   function theresult2() {
     //dialog ..
     let dialog = document.getElementById("dialog1");

     let loss =  document.getElementById("win").innerHTML;
     document.getElementById("win").innerHTML = "OOH 😣 , Game Over ";

     //Get the final time..
     let finaltime = document.getElementById("timer").innerHTML ;
     document.getElementById("time").innerHTML = finaltime;

     //Get the final number of attempts
     document.getElementById("scores").innerHTML = score;

     //Show Dialog..
     dialog.showModal();

    }

  //Create the play function again..
  function playagain() {
    //Reload the current page..
   location.reload();
  }
