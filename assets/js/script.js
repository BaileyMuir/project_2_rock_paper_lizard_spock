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

computer_Selection()


div_rock_selector.addEventListener('click', function() {
    console.log(rock);
})

div_paper_selector.addEventListener('click', function() {
    console.log(paper);
})

div_scissors_selector.addEventListener('click', function() {
    console.log(scissors);
})

div_lizard_selector.addEventListener('click', function() {
    console.log(lizard);
})

div_spock_selector.addEventListener('click', function() {
    console.log(spock);
})