/casch the dom/ 
let player_score = 0;
let computer_score = 0;
let span_player_score = document.getElementById("player-score");
let span_computer_score = document.getElementById("computer-score");
let div_score_board = document.querySelector(".score-board");
let outcome_result_h4 = document.querySelector("#outcome-result > h4");
let div_rock_selector = document.getElementById("rock");
let div_paper_selector = document.getElementById("paper");
let div_scissors_selector = document.getElementById("scissors");
let div_lizard_selector = document.getElementById("lizard");
let div_spock_selector = document.getElementById("spock");

/number generator/ 
function computer_Selection() {
    let computer_Options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let number_Generator = Math.floor(Math.random() * 5);
    console.log(computer_Options[number_Generator])
}

function game(player_Choice){
    let computer_Choice = computer_Selection();
    switch('player_Choice' + 'computer_Choice'){
        case 'rockscissors':
        case 'rocklizard':
            console.log(win);
            break;
        case 'paperrock':
            console.log(win);
            break;
        case 'paperspock':
            console.log(win);
            break;
        case 'scissorspaper':
            console.log(win);
            break;
        case 'scissorslizard':
            console.log(win);
            break;
        case 'lizardspock':
            console.log(win);
            break;
        case 'lizardpaper':
            console.log(win);
            break;
        case 'spockrock':
            console.log(win);
            break;
        case 'spockscissors':
            console.log(win);
            break;
        case 'scissorsrock':
        case 'lizardrock':
            console.log(loose);
            break;
        case 'rockpaper':
            console.log(loose);
            break;
        case 'spockpaper':
            console.log(loose);
            break;
        case 'paperscissors':
            console.log(loose);
            break;
        case 'lizardscissors':
            console.log(loose);
            break;
        case 'spocklizard':
            console.log(loose);
            break;
        case 'paperlizard':
            console.log(loose);
            break;
        case 'rockspock':
            console.log(loose);
            break;
        case 'scissorsspock':
            console.log(loose);
            break;
        case 'rockrrock':
        case 'sissorssissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
            console.log(draw);
            break;
    }
}

function main(){
    div_rock_selector.addEventListener('click', function() {
        game("rock");
    })
    
    div_paper_selector.addEventListener('click', function() {
        game("paper");
    })
    
    div_scissors_selector.addEventListener('click', function() {
        game("scissors");
    })
    
    div_lizard_selector.addEventListener('click', function() {
        game("lizard");
    })
    
    div_spock_selector.addEventListener('click', function() {
        game("spock");
    })
}

main()