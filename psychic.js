function questionAndAnswer() {

//Get answer
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';	 


	
//Get question:

let question = document.getElementById('getUserQuestion').value;

console.log(question);

let getQuestion = document.querySelector('.userQuestion');

getQuestion.innerHTML = "You asked: " + question;


getQuestion.innerHTML = 'You asked: ' + question;

let meaningOfLife = "I believe Douglas Adams gave the best answer to this. He also gave some excellent advice about towels."

if(question === null) {
	eightBall = 'You pressed cancel? That\'s a bit rude.'
} else if(question === "") {
	eightBall = '... Nothing? You need to ask a question.'
} else if(question === " ") {
	eightBall = 'Did you MEAN to not ask anything, or...?'
} else if(question === "What is the meaning of life?") {
  eightBall = meaningOfLife
} else if(question === "Is there a meaning to life?") {
  eightBall = meaningOfLife
} else if(question === "Who are you?"){
  eightBall = "Piper, as in, me, is a strange person with a daft sense of humour."
} else if(question === "Am I the best coder on School of Code?") {
  eightBall = "Is your name Piper? Then, no. Sorry, I dont make the rules."
} else {
if(randomNumber === 0) {
  eightBall = 'Yes. Probably. Maybe? Im going with yes.'  
} else if (randomNumber === 1) {
  eightBall = 'Definitely yes, and you should probably let your mother know.'
} else if (randomNumber === 2) {
  eightBall = '... I think you should speak to your doctor about that.'
} else if (randomNumber === 3) {
  eightBall = 'I\'m gonna be totally honest with you - I have no idea.'
} else if (randomNumber === 4) {
  eightBall = 'I promise Im not making this up but yes.'
} else if (randomNumber === 5) {
  eightBall = 'I wouldn\'t put money on it, if I were you.'
} else if (randomNumber === 6) {
  eightBall = 'If I had to choose, I would say... yes.'
} else if (randomNumber === 7) {
  eightBall = 'It\'s unlikely, if I\'m honest.'
};
}; //if(question)

console.log('The user asked: ' + question);

console.log('The eight ball answered: ' + eightBall);

magicAnswer = document.querySelector('.answer')
magicAnswer.innerHTML = eightBall;
}

