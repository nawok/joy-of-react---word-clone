import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} className="guess" answer={answer}>
          {guesses[index]}
        </Guess>
      ))}
    </div>
  );
}

export default GuessResults;
