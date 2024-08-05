
/*let getHumanChoice = function(){
    let str = prompt("Please enter Rock, Paper or Scissor")
    let humanChoice = str.at(0).toUpperCase() + str.slice(1).toLowerCase();
    
     return humanChoice; 
              
}*/

let humanScore = 0;
let computerScore = 0;


const container = document.querySelector(".btnContainer");


let rock = document.createElement("button");
rock.classList.add("btn1");
rock.textContent = "Rock";

let paper = document.createElement("button");
paper.classList.add("btn2");
paper.textContent = "Paper";

let scissor = document.createElement("button");
scissor.classList.add("btn3");
scissor.textContent = "Scissor";

let resultOutput = document.createElement("div");
resultOutput.classList.add("resultDiv");
resultOutput.textContent = "Score ";

let pcScore = document.createElement("div");
pcScore.classList.add("pcDiv");
pcScore.textContent = `PC: ${computerScore}`;

let youScore = document.createElement("div");
youScore.classList.add("humanDiv");
youScore.textContent = `YOU: ${humanScore}`;

let roundWinner = document.createElement("div");





container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);
container.appendChild(resultOutput);
resultOutput.appendChild(pcScore);
resultOutput.appendChild(youScore);


let humanSelection = "";

function handleButtonClick(event) {
    // Determine which button was clicked using event.target
    if (event.target.className === 'btn1') {
        humanSelection = "Rock"
    } else if (event.target.className === 'btn2') {
        humanSelection = "Paper"
    } else if (event.target.className === 'btn3') {
        humanSelection = "Scissor"
    }
}

// Attach the event listener to the parent element
container.addEventListener('click', function(event) {
    // Check if a button was clicked
    if (event.target.tagName === 'BUTTON') {
        handleButtonClick(event);
    }


    /*rock.addEventListener('click', function() {
        // Get the value of the button
        humanSelection = "Rock"*/
        

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
        
                
                const computerSelection = getComputerChoice();
                
        
            function playRound(humanSelection , computerSelection) {
        
                if (humanSelection == "Rock" && computerSelection == "Scissor") {
                    
                    humanScore++;
                    
                    roundWinner.textContent = `The Round Winner is: YOU`;
                    resultOutput.appendChild(roundWinner);    
                }
            
                else if (humanSelection == "Paper" && computerSelection == "Scissor"){
                    
                    
                    computerScore++;
                    
                    roundWinner.textContent = `The Round Winner is: PC`;
                    resultOutput.appendChild(roundWinner);   
                    
                }
            
                else if (humanSelection == "Scissor" && computerSelection == "Scissor"){
                    
                    return "That's a draw!"   
                }
                else if (humanSelection == "Rock" && computerSelection == "Rock") {
                   
                   return "That's a draw!"    
                }
            
                else if (humanSelection == "Paper" && computerSelection == "Rock"){
                    humanScore++;
                   
                    roundWinner.textContent = `The Round Winner is: YOU`;
                    resultOutput.appendChild(roundWinner);   
                        
                }
            
                else if (humanSelection == "Scissor" && computerSelection == "Rock"){
                    computerScore++;
                    
                    roundWinner.textContent = `The Round Winner is: PC`;
                    resultOutput.appendChild(roundWinner);    

                }
                else if (humanSelection== "Rock" && computerSelection == "Paper") {
                    computerScore++;
                    
                    roundWinner.textContent = `The Round Winner is: PC`;
                    resultOutput.appendChild(roundWinner);   
                }
            
                else if (humanSelection == "Paper" && computerSelection == "Paper"){
                    
                    return "That's a draw!"
                }
            
                else if (humanSelection == "Scissor" && computerSelection == "Paper"){
                    humanScore++;
                    roundWinner.textContent = `The Round Winner is: YOU`;
                    resultOutput.appendChild(roundWinner);            
                }

                pcScore.textContent = `PC: ${computerScore}`;
                youScore.textContent = `YOU: ${humanScore}`;
              
            }
        
            playRound(humanSelection , computerSelection);
        
            console.log(`Computer selected: ${computerSelection}`);
            console.log(`You selected: ${humanSelection}`);
            console.log(`Computer Score is: ${computerScore}`);
            console.log(`Your score is: ${humanScore}`);
           
        }
        
        playGame();
       
        
        if (humanScore == 5)
            {
                let gameWinner = document.createElement("div");
                gameWinner.textContent = `YOU WON THE GAME!`;
                resultOutput.appendChild(gameWinner);

        }
        
        else if (computerScore == 5)
            {
                let gameWinner = document.createElement("div");
                gameWinner.textContent = `Computer is the Winner of the Game!`;
                resultOutput.appendChild(gameWinner);
            }

          
    
    });


    
    
    

   










