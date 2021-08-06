const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score=0;

function welcome(){
  var userName =readlineSync.question(chalk.cyan.bold("Can I have your Name? "));
  console.log(chalk.green.bold("Welcome " + userName +" to KNOW ME Quiz"));
  console.log();
  console.log(chalk.bgYellowBright.bold("******************************************"));
  console.log();
  console.log(chalk.blue.bold("RULES OF THE GAME ARE SIMPLE")); 
  console.log(chalk.blue.bold("1). IF YOU ANSWER RIGHT YOU SCORE 2 POINTS"));
  console.log(chalk.blue.bold("2). IF YOU ANSWER WRONG YOU LOSE 1 POINT"));
  console.log();
  console.log(chalk.bgYellowBright.bold("************LETS BEGIN THE GAME************"));
  console.log();
}

var quesList=[
{
  question:"Where do i Live? ",
  answer:"Mumbai"
},
{
question:"How old am I? ",
answer:"22"
},
{
  question:"Am I a Tea or Coffe Person? ",
  answer:"Tea"
},
{
  question:"Whats my Favorite Color? ",
  answer:"Black"
},
{
  question:"Whats my Favorite Food? ",
 answer:"Chinese"
},
{
question:"Whats my Favorite Season?",
answer:"Autumn"
}
];

var highScore=[
  {
    name:"Khyati",
    score:12
  },
  {
    name:"Nikhil",
    score:10
  },
];

function check(question, answer){

 var userAns=readlineSync.question(question);

  if( userAns.toUpperCase() === answer.toUpperCase())
  {
    console.log();
    console.log(chalk.green.italic.bold("Your are Right!!!!!"));
    console.log();
    score=score+2;
  }
  else{
    console.log();
    console.log(chalk.red.italic.bold("Your are Wrong!!!!!"));
    score=score-1;
  } 
  console.log("Your Score is:",score);
  console.log();
  console.log(chalk.bgBlue.bold("---------------------------------------")); 
  console.log();
}

function play()
{
  for(var i = 0;i<quesList.length;i++)
  { 
    var currentQue =quesList[i];
    check(currentQue.question,currentQue.answer);
  }
}

function showScore(){
 console.log(chalk.green ('Thanks for Playing !!!!! \nYour Total Score is: ', score));
  console.log(chalk.yellowBright("****************************************************"));
  console.log(chalk.yellow.bold(("Check Out Score Board")));
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  
  for (var i = 0; i < highScore.length; i++) 
  {
    var max= highScore[i];
    console.log(chalk.blue.bold(max.name,max.score));
  }

}
    

welcome();
play();
showScore();


