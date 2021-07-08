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
    return computer_Options[number_Generator]
}

function game(player_Choice) {
    let computer_Choice = computer_Selection();
    switch(`player_Choice` + `computer_Choice`){
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

function main(){
    div_rock_selector.addEventListener('click', function() {
        game("rock");
        console.log("rock");
    })
    
    div_paper_selector.addEventListener('click', function() {
        game("paper");
        console.log("paper");
    })
    
    div_scissors_selector.addEventListener('click', function() {
        game("scissors");
        console.log("scissors");
    })
    
    div_lizard_selector.addEventListener('click', function() {
        game("lizard");
        console.log("lizard");
    })
    
    div_spock_selector.addEventListener('click', function() {
        game("spock");
        console.log("spock");
    });
}

main();