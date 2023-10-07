import React, { useEffect, useState } from 'react';

const TypingEffect = ({text}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);;

    useEffect(() => {
        if (index < text.length) {
          const timeoutId = setTimeout(() => {
            setDisplayedText((prevText) => prevText + text[index]);
            setIndex((prevIndex) => prevIndex + 1);
          }, 100);
          return () => clearTimeout(timeoutId);
        }
      }, [displayedText, index, text]);
    
      return <p>{displayedText}</p>;
};

export default TypingEffect;