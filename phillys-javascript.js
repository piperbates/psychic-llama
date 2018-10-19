function questionAndAnswer() {

//Get answer
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';	
	
	
//Get question:

var question = document.getElementById('getUserQuestion').value;

console.log(question);

var getQuestion = document.querySelector('.userQuestion');

getQuestion.innerHTML = "You asked: " + question;



var getQuestion = document.querySelector('.userQuestion');
getQuestion.innerHTML = 'You asked: ' + question;

if(question === null) {
	eightBall = 'You pressed cancel? That\'s a bit rude.'
} else if(question === "") {
	eightBall = 'You didn\'t ask a question.'
} else if(question === " ") {
	eightBall = 'Did you MEAN to not ask anything, or...?'
} else if(question === "What is the meaning of life?") {
	eightBall = 'I believe Douglas Adams gave the best answer - 42. He also gave some excellent advice about towels.'
} else if(question === "What's the meaning of life?") {
	eightBall = 'I believe Douglas Adams gave the best answer - 42. He also gave some excellent advice about towels.'
} else if(question === "Do you know where your towel is?") {
	eightBall = 'Of course. They are, of course, the most massively useful thing an interstellar hitchhiker can have. I am a very hoopy frood.'
} else if(question === "What is a llama?") {
	eightBall = 'I believe <a href="http://www.llamasinpajamas.net/" target="_blank">this</a> will give you everything you need to know';
} else if(question === "Who is Sarah Bates?") {
	eightBall = '<img src="master/mug.jpg" alt="mugshot" class="mugshot" /> If you <strong>must</strong> know, they\'re a creative web developer type who likes to test their skills and tinker with new projects. If you ask me (which, I note, you are), they have a very silly sense of humour - which you have probably surmised by visiting this particular area of the internet. If you really want to know more I suppose you could visit <a href="http://www.lazy-bunny.com" target="_blank">their coding portfolio</a>. However, you might be more interested in their <a href="http://www.sarahandthestrange.com" target="_blank">illustration stuff</a>, if you like that sort of thing. '
} else if(question === "Should I hire Sarah Bates?") {
	eightBall = 'That depends - do you like awesome people? If so, you should totally hire them. <a href="http://www.lazy-bunny.com">Here is their portfolio</a> if you want to see more of her work.'
} else if(question === "What is your name?") {
	eightBall = 'My name is Phillys, and I am a Psychic llama. It is good to meet you.'
} else if(question === "Are you a duck?") {
	eightBall = 'No, I am not a duck. Why do people keep asking me that?'
} else if(question === "Quack") { //This is an in joke. I apologise.
	eightBall = '... Sigh.'
} else if(question === "What\'s your favourite colour?") {
	eightBall = 'All colours are beautiful but I suppose I would have to say purple.'
} else if(question === "What\'s your favorite color?") {
	eightBall = 'All colours are beautiful but I suppose I would have to say purple.'
} else if(question === "Do you like alpacas?") {
	eightBall = 'I don\'t subscribe to the ridiculous llama vs alpaca debate, I believe it is ridiculous. Alpacas do seem to have a suspicious nature, though.'
} else {
if(randomNumber === 0) {
  eightBall = 'Yes, probably. I\'m not 100% sure though.'  
} else if (randomNumber === 1) {
  eightBall = 'Definitely. Sorry about that.'
} else if (randomNumber === 2) {
  eightBall = '... I think you should speak to your doctor about that.'
} else if (randomNumber === 3) {
  eightBall = 'I\'m gonna be totally honest with you - I have no idea.'
} else if (randomNumber === 4) {
  eightBall = 'Oh! I know this one! Yes.'
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

