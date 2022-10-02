import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';

const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput onSubmit={handleAddGuess} gameState={gameStatus} />
      {gameStatus === 'won' && <HappyBanner numGuesses={guesses.length} />}
      {gameStatus === 'lost' && <SadBanner answer={answer} />}
    </>
  );

  function handleAddGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
}

export default Game;
