import { getRandomNumber } from '../utils.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondnumber = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(firstNumber, secondnumber));
  const question = `${firstNumber} ${secondnumber}`;
  return [question, correctAnswer];
};

const runGcdGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runGcdGame;
