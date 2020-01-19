'use strict';

//------------------------------------------------------------Setting up our globally tracked variables that our functions will access and alter
let questionNumber = 0;
let score = 0;
//---------------------------------------------------------------

function renderQuestion(){
    $('.js-start-button').on('click', e=> { //-----------------------------------listens for press of START button
        console.log('START button has been clicked, Game has begun...');
        $('.js-quiz-start-container').hide();         //------------------------------hides the intro and start buttons inside this container
        $('.main-title').addClass('reduced-title');    //------------------------------Reduces the main title
        $('.js-scoreboard').show();
        $('.js-question-answer-form').html(generateQuestion()); //---------------INJECTING the questions from STORE into the inner html of this div
    })
}

function displayFeedback(userChoice) {
    let correct = STORE[questionNumber].correctAnswer;
    let answerView = "";
    if(userChoice === correct){
        score ++;
        answerView = `<div>
                        <img src="${STORE[questionNumber].icon}" width="300px">
                        <h2>Great Job, You Got it RIGHT!</h2>
                        <p>correct answer: ${correct}</p>
                      </div>`;
    } else {
        answerView = `<div>
                        <img src="${STORE[questionNumber].icon}" width="300px">
                        <h2>THATS WRONG,... READ A BOOK!</h2>
                        <p>correct answer: ${correct}</p>
                      </div>`
    }
    $('.js-next-button').show(); //unhide the NEXT button (this will still run regardless so be careful with this line)
    return answerView; 
}

function handleAnswerSubmit(){
    $('.js-question-answer-form').on('submit', e=> {
        e.preventDefault();
        const userAnswer = $('input[name="answer"]:checked').val();
        console.log(userAnswer);

        const feedbackHTML = displayFeedback(userAnswer);
        $('.score-display').text(`${score}`);
        $('.js-question-answer-form').html(feedbackHTML);
    })
}

function doSomething(){

}

function generateQuestion(){
    if(questionNumber < STORE.length){

        if(STORE[questionNumber].type === 'audio'){         //----------------------check if it's an AUDIO question
            return `
            <div class="question-${questionNumber} window">
            <img class = "animal-picture" src="${STORE[questionNumber].mystery}">
            <h2>${STORE[questionNumber].question}</h2> 
            
            <audio src="${STORE[questionNumber].audio}" controls volume="0.2" />
    
            <form>
            <fieldset>
            <div class="answerOptionA">
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
            <span>${STORE[questionNumber].answers[0]}</span>
            </label>
    
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
            <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            </div>
    
            <div class="answerOptionB">
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
            <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
            <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            </div>
    
            <button type="submit" class="js-submit-button">Submit</button>
            </fieldset>
            </form>
            </div>`
        } 
        
        else if(STORE[questionNumber].type === 'word'){                  //---------------check if it's an WORD question
            return `
            <div class="question-${questionNumber} window">
            <img class = "animal-picture" src="${STORE[questionNumber].mystery}">
            <h2>${STORE[questionNumber].question}</h2>  

            <form>
            <fieldset>
            <div class="answerOptionA">
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
            <span>${STORE[questionNumber].answers[0]}</span>
            </label>

            <label>
            <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
            <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            </div>

            <div class="answerOptionB">
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
            <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
            <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            </div>

            <button type="submit" class="js-submit-button">Submit</button>
            </fieldset>
            </form>
            </div>`
        }

        else if(STORE[questionNumber].type === 'video'){                  //---------------check if it's an WORD question
            return `
            <div class="question-${questionNumber} window">
            <video src="${STORE[questionNumber].videoCut} controls">
            <h2>${STORE[questionNumber].question}</h2>  

            <form>
            <fieldset>
            <div class="answerOptionA">
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
            <span>${STORE[questionNumber].answers[0]}</span>
            </label>

            <label>
            <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
            <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            </div>

            <div class="answerOptionB">
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
            <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label>
            <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
            <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            </div>

            <button type="submit" class="js-submit-button">Submit</button>
            </fieldset>
            </form>
            </div>`
        }

    } else {
        console.log('replace this with ..."renderResults()" ')
    }

} //-----------------------------------------------------------------------------------------END of generateQuestion()

function handleQuiz(){ //------------------ONLY LOAD EVENT-LISTENERS IN HERE!!!!!!!!!!----------
    console.log('page has loaded, DOM is ready...');
    renderQuestion();
    handleAnswerSubmit();
}




$(handleQuiz);
