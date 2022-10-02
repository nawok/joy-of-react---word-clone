import React from 'react';

function GuessInput({ onSubmit, gameState }) {
  const [guess, setGuess] = React.useState('');
  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleOnChange}
        disabled={gameState !== 'playing'}
      />
    </form>
  );

  function handleOnChange(event) {
    const guessInputValue = event.target.value;
    setGuess(guessInputValue.toUpperCase());
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      return;
    }
    onSubmit(guess);
    setGuess('');
  }
}

export default GuessInput;
