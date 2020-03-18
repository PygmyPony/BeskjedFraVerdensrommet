class App {
    constructor() {
        const button1 = document.querySelector('#button-1');
        const buttonFrame = document.querySelector('#button-1-frame');
        const question1frame = document.querySelector('#question-1-frame');
        const input = document.querySelector('#input-1');
        const question1submit = document.querySelector('#question-1-submit');
        const question2frame = document.querySelector('#question-2-frame');
        const input2 = document.querySelector('#input-2');
        const question2submit = document.querySelector('#question-2-submit');
        const finalScreen = document.querySelector('#final-screen');
        const finalWords = document.querySelector('#final-words');
        
        let userWhat = '';
        let userWhere = '';

        button1.addEventListener('click', event => {
            buttonFrame.style.display = "none";
            question1frame.style.display = "inline-block"    
        });

        question1submit.addEventListener('click', event => {
            handleQ1text();
        });

        function handleQ1text() {
            userWhat = input.value;
            question1frame.style.display = "none";
            question2frame.style.display = "inline-block";
        }

        question2submit.addEventListener('click', event => {
            handleQ2text();
        });

        function handleQ2text() {
            userWhere = input2.value;
            question2frame.style.display = "none";
            finalScreen.style.display = "inline-block";
            finalWords.innerHTML = `Vær hilset ${userWhat} fra ${userWhere}. Vi har kommet for å utslette planeten din!`; 
        }



    };
};

new App();