$(document).ready(function() {

    var randomNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var blueCrystal;
    var orangeCrystal;
    var pinkCrystal;
    var purpleCrystal;

    //set the value of each crystal to a hidden value 1-12
    //display a random number 19-120
    function randomSet() {
        randomNumber = Math.ceil(Math.random() * 100) + 12;
        $("#random-number").text(randomNumber);
        blueCrystal = Math.ceil(Math.random() * 10) + 2;
        orangeCrystal = Math.ceil(Math.random() * 10) + 2;
        pinkCrystal = Math.ceil(Math.random() * 10) + 2;
        purpleCrystal = Math.ceil(Math.random() * 10) + 2;
        console.log(blueCrystal);
        console.log(orangeCrystal);
        console.log(pinkCrystal);
        console.log(purpleCrystal);
    }

    //restart the game when the player wins or loses and increment win/loss
    //when the game resets, display a new random number 
    //and reset four new hidden values for all the crystals 
    //reset the total score to zero
    function reset(win) {
        if (win) {
            wins++;
            $("#wins").text(wins);
            alert("You won!");
        } else {
            losses++;
            $("#losses").text(losses);
            alert("You lost. Try again.");
        }
        randomSet();
        totalScore = 0;
        $("#total-score").text(totalScore);
    }

    //if the total score matches the random number, the player wins 
    //if the total score goes above the random number, the player loses 
    function checkScore() {
        if (totalScore === randomNumber) {
            reset(true);
        } else if (totalScore > randomNumber) {
            reset(false);
        } else {}
    }


    randomSet();
    
    //When the player clicks on a crystal, 
    //it will add the specific amount of points (hidden value) to the total score
    $("#blue-crystal").click(function() {
        totalScore += blueCrystal;
        $("#total-score").text(totalScore);
        checkScore();
    })

    $("#orange-crystal").click(function() {
        totalScore += orangeCrystal;
        $("#total-score").text(totalScore);
        checkScore();
    })

    $("#pink-crystal").click(function() {
        totalScore += pinkCrystal;
        $("#total-score").text(totalScore);
        checkScore();
    })

    $("#purple-crystal").click(function() {
        totalScore += purpleCrystal;
        $("#total-score").text(totalScore);
        checkScore();
    })

});