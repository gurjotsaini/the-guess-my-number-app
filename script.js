'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const setTextValue = function (className, message) {
      document.querySelector(className).textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
      const guess = Number(document.querySelector('.guess').value);

      if (!guess) {
            setTextValue('.message', 'No Number!');
      } else if (guess === secretNumber) {
            setTextValue('.message', 'Correct Number!');
            setTextValue('.number', secretNumber);

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                  highscore = score;
                  setTextValue('.highscore', highscore);
            }
      } else if (guess !== secretNumber) {
            if (score > 1) {
                  let guessValue = guess > secretNumber ? 'Too High!' : 'Too Low!'
                  setTextValue('.message', guessValue);
                  setTextValue('.score', score);
                  score--;
            } else {
                  setTextValue('.message', 'You Lost!');
                  setTextValue('.score', 0);
            }
      }
});

document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random()*20) + 1;

      setTextValue('.message', 'Start guessing...');
      setTextValue('.score', score);
      setTextValue('.number', '?');

      document.querySelector('.guess').value = '';

      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
});
