

correctAnswers = 0;

// 2. Store the rank of a player
playRank = 'No Crown';

let htmlElement = document.querySelector('main');

  cookRecipe = prompt('Should you follow cooking recipes strictly as shown?');
  bakeRecipe = prompt('Should you follow all baking recipes strictly as shown?');
  eggSub = prompt('What is an egg substitute?');
  waterSub = prompt('What is a water substitute?');
  cookSelf= prompt('Should you cook for yourself?');

if (cookRecipe === "no" || cookRecipe === "n" ) {
  correctAnswers += 1;
}
if (bakeRecipe === "yes" || cookRecipe === "y") {
    correctAnswers += 1;
}
if (eggSub === "applesauce" || eggSub === "apple sauce" || eggSub === "baking soda") {
   correctAnswers += 1;
}
  //if user gets it wrong they have 3 right so they are still at silver
if (waterSub === "milk") {
   correctAnswers = correctAnswers += 1;
}

if (cookSelf === "yes" || eggSub === "y") {
correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctAnswers === 5 ) {
  rank = "Gold";
} else if (  correctAnswers  >= 3 ) {
  rank = "Silver";
} else if (  correctAnswers  >= 1 ) { // check for 1-2 correct
  rank = "Bronze";
} else {
  rank = "No Crown :(";
}


// 6. Output results to the <main> element

htmlElement.innerHTML = `<h2>You got ${correctAnswers} out of 5 questions correct.</h2>
<p>Crown earned: ${playRank}</p>`;
