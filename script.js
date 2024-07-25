
let getHumanChoice = function(){
    let str = prompt("Please enter Rock, Paper or Scissor")
    let humanChoice = str.at(0).toUpperCase() + str.slice(1).toLowerCase();
    
     return humanChoice; 
              
}






let humanScore = 0;
let computerScore = 0;



function playGame(){

    let getComputerChoice = function (){
        let computerChoice = Math.floor(Math.random()* 3)
        if (computerChoice === 0){
          return "Rock";
        }
        
        else if(computerChoice === 1){
            return "Paper";
        }
        
        else {
            return "Scissor"};
            
        }
        
        
        
    
    

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

    function playRound(humanSelection , computerSelection) {

        if (humanSelection == "Rock" && computerSelection == "Scissor") {
            
            humanScore++;
           return "You Won!"
                  
              
        }
    
        else if (humanSelection == "Paper" && computerSelection == "Scissor"){
            
            
            computerScore++;
            return "You lost!"
                 
            
        }
    
        else if (humanSelection == "Scissor" && computerSelection == "Scissor"){
            
            return "That's a draw!"
           
        }
        else if (humanSelection == "Rock" && computerSelection == "Rock") {
           
           return "That's a draw!"
            
        }
    
        else if (humanSelection == "Paper" && computerSelection == "Rock"){
            humanScore++;
            return "You Won!"
            
            
        }
    
        else if (humanSelection == "Scissor" && computerSelection == "Rock"){
            computerScore++;
             return "You lost!"
             
          
           
        }
        else if (humanSelection== "Rock" && computerSelection == "Paper") {
            computerScore++;
             return "You lost!"
             
         
        }
    
        else if (humanSelection == "Paper" && computerSelection == "Paper"){
            
            return "That's a draw!"
            
    
        }
    
        else if (humanSelection == "Scissor" && computerSelection == "Paper"){
            humanScore++;
            return "You Won!"
                  
        }
      
    }

    let result = playRound(humanSelection , computerSelection);

    console.log(`Computer selected: ${computerSelection}`);
    console.log(`You selected: ${humanSelection}`);
    console.log(`Game Result : ${result}`);
    console.log(`Computer Score is: ${computerScore}`);
    console.log(`Your score is: ${humanScore}`);
   
}




for (i = 0; i < 5; i++){
    
     playGame();
    
}

if (humanScore > computerScore)
    {
    console.log ("YOU WON THE GAME!!!")
}

else if (humanScore == computerScore)
    {console.log ("The Game ended in a Draw!!")}

else console.log ("The Winner of the Game is the Computer!!!")
