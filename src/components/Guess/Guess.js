import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ answer, children: guess }) {
  const result = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <Cell
          key={index}
          letter={result && result[index].letter}
          status={result && result[index].status}
        />
      ))}
    </p>
  );
}

export default Guess;
