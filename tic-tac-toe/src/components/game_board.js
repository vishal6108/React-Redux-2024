import React from "react";

function GameBoard({ selectedOn, board }) {
  //   const [gBoard, setGBoard] = useState(initialMatrix);
  //   function handleBoxChange(rowIdx, colIdx) {
  //     setGBoard((prevGBoard) => {
  //       const updatedBoard = [...prevGBoard.map((innerArray) => [...innerArray])];
  //       updatedBoard[rowIdx][colIdx] = activePlayerSym;
  //       return updatedBoard;
  //     });
  //     selectedOn();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <ol key={rowIdx}>
          {row.map((sym, colIdx) => (
            <li key={colIdx}>
              <button
                onClick={() => selectedOn(rowIdx, colIdx)}
                disabled={sym !== null}
              >
                {sym}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}

export default GameBoard;
