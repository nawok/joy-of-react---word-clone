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
  const [gameState, setGameState] = React.useState('playing');

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput onSubmit={handleAddGuess} gameState={gameState} />
      {gameState === 'won' && <HappyBanner guesses={guesses} />}
      {gameState === 'lost' && <SadBanner answer={answer} />}
    </>
  );

  function handleAddGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameState('won');
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }
}

export default Game;
