//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
//GLOBAL VARIABLES
function pageload (){
        var wins = 0;
        var losses = 0;
        $("#button").click(function(){
                $("body").css("color","black");
                var userInput = $("#input").val().toLowerCase();
                var comInput = Math.floor(Math.random()*3);
                var comOption = [
                        "rock",
                        "paper",
                        "scissors"
                ];
                var comSelection = comOption[comInput];
                if (userInput === comSelection) {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("A Tie has occured");
                } else if (userInput === "rock" && comSelection === "paper") {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("COM Wins!");
                        losses = losses + 1;
                } else if (userInput === "rock" && comSelection === "scissors") {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("User Wins!");
                        wins = wins + 1;
                } else if (userInput === "paper" && comSelection === "rock") {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("User Wins!");
                        wins = wins + 1;
                } else if (userInput === "paper" && comSelection === "scissors") {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("COM Wins!");
                        losses = losses + 1;
                } else if (userInput === "scissors" && comSelection === "rock") {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("COM Wins!");
                        losses = losses + 1;
                } else if (userInput === "scissors" && comSelection === "paper") {
                        $("#user-input").text(userInput);
                        $("#com-input").text(comSelection);
                        $("#final-result").text("User Wins!");
                        wins = wins + 1;
                } else if (userInput === "gainsboro") {
                        $("#user-input").text("Gainsboro");
                        $("#com-input").text("Literally Gone");
                        $("#final-result").text("Supreme Annihilation!!");
                        $("body").css("color","gainsboro");
                        wins = wins + 1;
                } else if (userInput === "tie") {
                        $("#user-input").text("tie");
                        $("#com-input").text("tie");
                        $("#final-result").text("Here is your free tie");
                } else {
                        $("#user-input").text("EROOOOOOR");
                        $("#com-input").text("EROOOOOOOR");
                        $("#final-result").text("EROOOOOOOR");  
                }
                $("#wins").text("Wins : " + wins);
                $("#losses").text("Losses : " + losses);
        });
}
$(document).ready(pageload);


//FUNCTIONS



// DOCUMENT READY FUNCTION

