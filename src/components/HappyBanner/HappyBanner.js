import React from 'react';

function HappyBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
