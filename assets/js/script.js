/*jshint esversion: 6 */
// cache the doms to increase load-up spead
let player_score = 0;
let computer_score = 0;
let span_player_score = document.getElementById("player-score");
let span_computer_score = document.getElementById("computer-score");
let outcome_result_h4 = document.querySelector("#outcome-result > h4");
let div_rock_selector = document.getElementById("rock");
let div_paper_selector = document.getElementById("paper");
let div_scissors_selector = document.getElementById("scissors");
let div_lizard_selector = document.getElementById("lizard");
let div_spock_selector = document.getElementById("spock");

// appon pushing one of the buttons selects one of the game functions to allow for a compareson with the computers
function main(){
    div_rock_selector.addEventListener('click', function() {
        game("rock");
    });
    
    div_paper_selector.addEventListener('click', function() {
        game("paper");
    });
    
    div_scissors_selector.addEventListener('click', function() {
        game("scissors");
    });
    
    div_lizard_selector.addEventListener('click', function() {
        game("lizard");
    });
    
    div_spock_selector.addEventListener('click', function() {
        game("spock");
    });
}

main();

// number generator which produces one of the symbol options
function computer_Selection() {
    let computer_Options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let number_Generator = Math.floor(Math.random() * 5);
    return computer_Options[number_Generator];
}

// compares the user and computers choice and links to relevant function
function game(player_Choice) {
    let computer_Choice = computer_Selection();
    switch(player_Choice + computer_Choice){
        case 'rockscissors':
        case 'rocklizard':
            rock_win(player_Choice, computer_Choice);
            break;
        case 'paperrock':
            paperrock_win(player_Choice, computer_Choice);
            break;
        case 'paperspock':
            paperspock_win(player_Choice, computer_Choice);
            break;
        case 'scissorspaper':
            scissorspaper_win(player_Choice, computer_Choice);
            break;
        case 'scissorslizard':
            scissorslizard_win(player_Choice, computer_Choice);
            break;
        case 'lizardspock':
            lizardspock_win(player_Choice, computer_Choice);
            break;
        case 'lizardpaper':
            lizardpaper_win(player_Choice, computer_Choice);
            break;
        case 'spockrock':
            spockrock_win(player_Choice, computer_Choice);
            break;
        case 'spockscissors':
            spockscissors_win(player_Choice, computer_Choice);
            break;
        case 'scissorsrock':
        case 'lizardrock':
            rock_loss(player_Choice, computer_Choice);
            break;
        case 'rockpaper':
            rockpaper_loss(player_Choice, computer_Choice);
            break;
        case 'spockpaper':
            spockpaper_loss(player_Choice, computer_Choice);
            break;
        case 'paperscissors':
            paperscissors_loss(player_Choice, computer_Choice);
            break;
        case 'lizardscissors':
            lizardscissors_loss(player_Choice, computer_Choice);
            break;
        case 'spocklizard':
            spocklizard_loss(player_Choice, computer_Choice);
            break;
        case 'paperlizard':
            paperlizard_loss(player_Choice, computer_Choice);
            break;
        case 'rockspock':
            rockspock_loss(player_Choice, computer_Choice);
            break;
        case 'scissorsspock':
            scissorsspock_loss(player_Choice, computer_Choice);
            break;
        case 'rockrrock':
        case 'sissorssissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
            draw(player_Choice, computer_Choice);
            break;
    }
}

// adds a point to everytime the player wins and displays a message
function rock_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " crushes " + computer_Choice +", you win!.";
    }
    
    function paperrock_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " covers " + computer_Choice +", you win!.";
    }
             
    function paperspock_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " disproves " + computer_Choice +", you win!.";
    }
    
    function scissorspaper_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " cuts " + computer_Choice +", you win!.";
    }
    
    function scissorslizard_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " decapitates " + computer_Choice +", you win!.";
    }    
    
    function lizardspock_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " poisons " + computer_Choice +", you win!.";
    }     
    
    function lizardpaper_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " eats " + computer_Choice +", you win!.";
    }       
    
    function spockrock_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " vaporizes " + computer_Choice +", you win!.";
    }       
    
    function spockscissors_win(player_Choice, computer_Choice) {
    player_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " smashes " + computer_Choice +", you win!.";
    }  

    // adds a point to everytime the computers wins and displays a message
    function rock_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was crushed by " + computer_Choice +", you loose!.";
    }
    
    function rockpaper_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was covered by " + computer_Choice +", you loose!.";
    }
         
    function spockpaper_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was disproved by " + computer_Choice +", you loose!.";
    }     
     
    function paperscissors_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was cut by " + computer_Choice +", you loose!.";
    }     
    
    function lizardscissors_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was decapitated by " + computer_Choice +", you loose!.";
    }     
    
    function spocklizard_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was poisoned by " + computer_Choice +", you loose!.";
    }       
    
    function paperlizard_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was eaten by " + computer_Choice +", you loose!.";
    }       
    
    function rockspock_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was vaporized by " + computer_Choice +", you loose!.";
    }         
    
    function scissorsspock_loss(player_Choice, computer_Choice) {
    computer_score++;
    span_player_score.innerHTML = player_score;
    span_computer_score.innerHTML = computer_score;
    outcome_result_h4.innerHTML = player_Choice + " was smashed by " + computer_Choice +", you loose!.";
    }          
    
    // adds a message whenever theres a draw
    function draw(player_Choice, computer_Choice) {
    outcome_result_h4.innerHTML = player_Choice + " cancels out " + computer_Choice +", its a draw!.";
    }