

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

var quizSection = document.getElementById("quizSection");


fuction startQuiz() {
  
}




  var choiceSelection = [{
    prompt: "These are examples of array methods except:",
    options: {
      d: "concat()",
      c: "findIndex()",
      b: "splice()",
      a: "stand()",
    },
    answer: "stand()"
  },
  {
    prompt: "Why are loops important in Javascript?",
    options: {
      a: "Saves time and allows a piece of code to be ran more than once",
      b: Changes the color of buttons",
      c: "Always sends an alert to the user when the code is ran"
    },
    answer: "Saves time and allows a piece of code to be ran more than once"
  },
  {
    prompt: "True or false: jQuery can simplify Javascript and can manipulate the DOM.",
    options: {
      a: "True",
      b: "False"],
    answer: "True"
  }
  ]


  console.log(choiceSelection)
  var score = 0;

  for (var i = 0; i < choiceSelection.length; i++) {
    var answer= (choiceSelection[i].o)
  }



 

  //starts the questions on the first array
  var quizPrompt = -1;

  //starts the loop of arrays
  function questionLoop() {
    //changes the arrays after each loop
    quizPrompt++

    var showPrompt = "<div>" + choiceSelection[quizPrompt].prompt + "</div>"

    
    
    document.getElementById("quizSection").innerHTML = quizContent;

    //to stop quiz 
    if (quizPrompt > choiceSelection.length - 1) {
      return;
    };
  };

//start();
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
  //use local stor

