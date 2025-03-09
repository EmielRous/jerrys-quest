import React from "react";

const LingoGame = ({ wordLength, guessedWord, answer, onCorrect }) => {
  const renderSquares = () => {
    const squares = [];
    const answerLetterCount = {};
    if (guessedWord === answer) {
      onCorrect();
    }
    // Count occurrences of each letter in the answer
    for (let i = 0; i < answer.length; i++) {
      const letter = answer[i];
      answerLetterCount[letter] = (answerLetterCount[letter] || 0) + 1;
    }

    // First pass: mark correct positions
    const correctPositions = Array(wordLength).fill(false);
    for (let i = 0; i < wordLength; i++) {
      if (guessedWord[i] === answer[i]) {
        correctPositions[i] = true;
        answerLetterCount[guessedWord[i]]--;
      }
    }

    // Second pass: mark incorrect positions
    for (let i = 0; i < wordLength; i++) {
      let color = "#9c9999"; // Default color for incorrect letters

      if (correctPositions[i]) {
        color = "rgba(74,239,39,0.8)"; // Correct letter in the correct place
      } else if (
        answer.includes(guessedWord[i]) &&
        answerLetterCount[guessedWord[i]] > 0
      ) {
        color = "#e3c143"; // Correct letter in the wrong place
        answerLetterCount[guessedWord[i]]--;
      }

      squares.push(
        <div
          key={i}
          style={{
            color: "black",
            width: "40px",
            height: "40px",
            display: "inline-block",
            margin: "5px",
            backgroundColor: color,
            lineHeight: "40px",
            textAlign: "center",
            border: "1px solid black",
            fontSize: "20px",
          }}
        >
          {guessedWord[i] || ""}
        </div>,
      );
    }
    return squares;
  };

  return <div>{renderSquares()}</div>;
};

export default LingoGame;
