
//START BUTTON
//Button through HTML-- connect it to JS
//click event listener

// MAKING TIMER/START
//Link the start to the timer, start the questions after start button is hit-- loop?
// start at 0 i++ : needs a variable to base timer
//set timout, setinterval
//append, innerHTML, textcontent-- DOM- parentNodes

// PRESENT QUESTIONS
//when a button is selected- selection is recorded and next question is presented
//JS controls when the text is shown
//DOM-- innerHTML
//boolean to if answer is true or false, store answer in variable


var choiceSelection = [{
  prompt: "These are examples of array methods except:",
  options: ["concat()",
            "findIndex()", 
            "splice()", 
            "stand()"],
  answer: "stand()"
},
{
  prompt: "Why are loops important in Javascript?",
  options: ["Saves time and allows a piece of code to be ran more than once",
            "Changes the color of buttons",
            "Always sends an alert to the user when the code is ran"],
  answer: "Saves time and allows a piece of code to be ran more than once"
}


]
console.log(choiceSelection)

// DEDUCT TIME IF INCORRECT ANSWER
//JS boolean- deducts time if false
//if false, change: the timer variable

// GAME OVER- RESULTS
//When questions are finshed then display results page
//if timer runs out then display results page
// if variable is 0 display- innerHTML
// varible-- object. round variable to keep track of questions

// HIGH SCORE
//form to fill out and save initals
//use local storage