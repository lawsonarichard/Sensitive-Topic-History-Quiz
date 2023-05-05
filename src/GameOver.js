import React from "react";
import "./GameOver.css";

const GameOver = ({ score, handlePlayAgain }) => (
  <div class="game-over">
    {/* <p class="concluding-statement">
      This game contains a selection of questions about Hip Hop.
      
    </p>
    <p class="invitation">
      We invite you to think about the victims of US foreign policy decisions
      and to consider the impact of these decisions on their lives. Please share
      your score and invite your friends to play this game and learn more about
      these sensitive topics.
    </p>
    <p class="note">
      Note: All the code and the questions in this game were written by an AI.
    </p> */}
    <p class="score">
      Your final score is: <span class="score-number">{score}</span>
    </p>
    <button onClick={handlePlayAgain}>Play Again</button>
  </div>
);

export default GameOver;
