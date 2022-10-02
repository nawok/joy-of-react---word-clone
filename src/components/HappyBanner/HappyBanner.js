import React from 'react';

function HappyBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
