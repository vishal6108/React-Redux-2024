import React from "react";

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((x) => (
        <li key={`${x.square.row}${x.square.col}`}>
          {x.player} selected {x.square.row}:{x.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
