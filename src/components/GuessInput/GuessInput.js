import React from 'react';

function GuessInput({ onSubmit, gameState }) {
  const [guess, setGuess] = React.useState('');
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        disabled={gameState !== 'running'}
      />
    </form>
  );

  function handleChange(event) {
    const guessInputValue = event.target.value;
    setGuess(guessInputValue.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      return;
    }
    onSubmit(guess);
    setGuess('');
  }
}

export default GuessInput;
