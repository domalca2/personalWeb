import React, { useState, useEffect } from 'react';

const DynamicText = ({ words }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [letterCount, setLetterCount] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    // Animación de escritura
    if (letterCount < words[0].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(words[0].substring(0, letterCount + 1));
        setLetterCount(letterCount + 1);
      }, 120);

      return () => clearTimeout(timeout); // Limpiar timeout
    }
  }, [letterCount, words]);

  useEffect(() => {
    // Parpadeo del cursor
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 400);

    return () => clearInterval(blinkInterval); // Limpiar intervalo
  }, []);

  return (
    <div className="console-container">
      <span id="text">{displayedText}</span>
      <span
        className="console-underscore"
        style={{ visibility: isBlinking ? 'visible' : 'hidden' }}
      >
        _
      </span>
    </div>
  );
};

export default DynamicText;
