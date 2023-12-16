import React from "react";

function GameOver({ winner, reset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a Draw</p>}
      <button onClick={reset}>Rematch!</button>
    </div>
  );
}

export default GameOver;
