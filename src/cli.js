import readlineSynk from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSynk.question('May I have ypur name?');
  console.log(`Hello, ${name}!`);
};

export default sayGreetings;
