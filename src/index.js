import readlineSync from 'readline-sync';
import { N_ROUNDS } from './games';

const gameProcess = (gameObject) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('Tell me your name, please: ');

  console.log(`Let's play a game, ${playerName}!`);

  let totalCount = 0;

  console.log(gameObject.instruction);

  for (let i = 0; i < N_ROUNDS; i += 1) {
    console.log(gameObject.askQuestion(gameObject.numbers[i]));
    const answer = readlineSync.question('Your answer: ');

    if (answer === gameObject.calcAnswer(gameObject.numbers[i])) {
      console.log('Correct!');
      totalCount += 1;
    } else {
      console.log('Wrong!');
      break;
    }
  }

  if (totalCount === N_ROUNDS) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default gameProcess;
