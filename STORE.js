


const STORE = [ 
    {
        question: 'Where is this sound from?',
        answers: ['Banjo Kazooie', 'Kirby', 'Super Mario', 'Donkey Kong'],
        correctAnswer: 'Banjo Kazooie',
        icon: 'TriviaFiles/Video/BanjoKazooieVideo/banjo-jiggy-dance.gif',
        icon2: 'TriviaFiles/Video/BanjoKazooieVideo/game-over.gif',
        type: 'audio',
        audio: 'TriviaFiles/Audio/BanjoKazooie/getJiggy.mp3',
        audio2: 'TriviaFiles/Audio/BanjoKazooie/get-jiggy-2.mp3',
        audio3: 'TriviaFiles/Audio/BanjoKazooie/banjo-game-over.mp3',
        alt: 'icon description i guess',
        mystery: 'images/static-tv.gif',
        answerHTML: (userInput,qNumber)=> {

            if(userInput === STORE[qNumber].correctAnswer){
                score ++;
                return `<img width="100%" src="${STORE[qNumber].icon}" />
                        <audio src="${STORE[qNumber].audio2}" autoplay></audio>
                        <h1>Good Job</h1>`
            } else {
                return `<img width="100%" src="${STORE[qNumber].icon2}" />
                        <audio src="${STORE[qNumber].audio3}" autoplay></audio>
                        <h1>WRONG!</h1>`
            }
        }
    },
    {
        question: "What was Luke going to pick up in Toshe Station before uncle Owen ordered him to clean the droids?",
        answers: ['Turbo Fluxuators', 'Power Converters', 'Flux Capacitors', 'Space Heroine'],
        correctAnswer: 'Power Converters',
        icon: 'TriviaFiles/Video/StarWars/vader-wrong.gif',
        type: 'video',
        videoCut: 'TriviaFiles/Video/StarWars/star-wars-toshe-station-CUT.mp4',
        alt: 'icon description i guess',
        videoAfter: 'TriviaFiles/Video/StarWars/star-wars-toshe-station.mp4',
        answerHTML: (userInput,qNumber)=> {

            if(userInput === STORE[qNumber].correctAnswer){
                score ++;
                return `<video width="100%" src="${STORE[qNumber].videoAfter}" controls autoplay></video>
                        <h3>Good Job</h3>
                        <h4>...it's war and fatherly hand-severing for teen Luke, sorry kid. No converting power today.😭 `
            } else {
                return `<img width="100%" src="${STORE[qNumber].icon}"></video>
                        <h4 style="font-style: italic">"Most unimpressive..."</h4>
                        <h3>WRONG!</h3>`
            }
        }

    },
    {
        question: 'What Video GAME is this sound from?',
        answers: ['Crash Bandicoot', 'Tony Hawk', 'Zelda', 'Final Fantasy'],
        correctAnswer: 'Tony Hawk',
        icon: 'TriviaFiles/Video/TonyHawkVideo/tony-hawk-special.gif',
        icon2: 'TriviaFiles/Video/Mario/mario-64-death-poison.gif',
        type: 'audio',
        audio: 'TriviaFiles/Audio/TonyHawk/tony-hawk-special.wav',
        alt: 'icon description i guess',
        mystery: 'images/static-tv-2.gif',
        answerHTML: (userInput,qNumber)=> {

            if(userInput === STORE[qNumber].correctAnswer){
                score ++;
                return `<img width="100%" src="${STORE[qNumber].icon}" />
                        <h1>Good Job</h1>`
            } else {
                return `<img width="100%" src="${STORE[qNumber].icon2}" />
                        <h1>WRONG!</h1>`
            }
        }
    },
    {
        question: 'What is the name of this minigame?',
        answers: ['Bombchu Bowling', 'Bombvoyage', 'Bombchu Blowup Range', 'Chicken Chaser'],
        correctAnswer: 'Bombchu Bowling',
        icon: 'TriviaFiles/Video/Zelda/zelda-young-link-shoe-tap.webp',
        icon2: 'images/snes-controller.gif',
        type: 'word',
        alt: 'icon description i guess',
        mystery: 'TriviaFiles/Video/Zelda/zelda-bombchu-bowling.gif',
        answerHTML: (userInput,qNumber)=> {

            if(userInput === STORE[qNumber].correctAnswer){
                score ++;
                return `<img width="100%" src="${STORE[qNumber].icon}" />
                        <h1>Good Job</h1>`
            } else {
                return `<img width="100%" src="${STORE[qNumber].icon2}" />
                        <h1>WRONG!</h1>
                        <h4>😁play some more games, friend🕹️</h4>`
            }
        }
    },
    {
        question: `Which Simpsons Character was canonically named "Homer's Enemy"?`,
        answers: ['Ned Flanders', 'Sideshow Bob', 'Frank Grimes', 'Mr.Burns'],
        correctAnswer: 'Frank Grimes',
        icon: 'TriviaFiles/Video/Simpsons/frank-grimes-2.gif',
        icon2: 'TriviaFiles/Video/Simpsons/homer-way-off.gif',
        icon3: 'TriviaFiles/Video/Simpsons/homer-enemy-tombstone.png',
        type: 'word',
        audio: '',
        audio2: '',
        audio3: '',
        alt: 'icon description i guess',
        mystery: 'TriviaFiles/Video/Simpsons/homer-enemies.gif',
        answerHTML: (userInput,qNumber)=> {

            if(userInput === STORE[qNumber].correctAnswer){
                score ++;
                return `<img width="100%" src="${STORE[qNumber].icon}" />
                        <img width="100%" src="${STORE[qNumber].icon3}" />
                        <h1>Good Job</h1>`
            } else {
                return `<img width="100%" src="${STORE[qNumber].icon2}" />
                        <h1>WRONG!</h1>`
            }
        }
    }
]