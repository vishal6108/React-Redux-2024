import { useState } from "react";
import "./App.css";
import GameBoard from "./components/game_board";
import Player from "./components/player";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./wininng_combination";
import GameOver from "./components/game_over";

function getDerivedState(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function getDerivedWinnerState(gameBoard, whoWon) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSet = gameBoard[combination[0].row][combination[0].column];
    const SecondSquareSet =
      gameBoard[combination[1].row][combination[1].column];
    const ThirdSquareSet = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSet &&
      firstSquareSet === SecondSquareSet &&
      firstSquareSet === ThirdSquareSet
    ) {
      winner = whoWon[firstSquareSet];
    }
  }
  return winner;
}

function getDerivedGameBoardState(gameTurns) {
  // initial Game board
  let gameBoard = [...initialMatrix.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

const initialMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  // const [activePlayer, setActivePlayer] = useState("X"); //reducing a use of useState
  const [gameTurns, setGameTurns] = useState([]);
  const [whoWon, setWhoWon] = useState(PLAYERS);
  const activePlayer = getDerivedState(gameTurns);

  const gameBoard = getDerivedGameBoardState(gameTurns);
  const winner = getDerivedWinnerState(gameBoard, whoWon);

  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectBox(rowIdx, colIdx) {
    setGameTurns((prevTurns) => {
      const currentPlayer = getDerivedState(prevTurns);
      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function rematchGame() {
    setGameTurns([]);
  }

  function getWhoWonState(symbol, newName) {
    const newNameValue = newName.toUpperCase();
    setWhoWon((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newNameValue,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={getWhoWonState}
          />
          <Player
            initialName={PLAYERS.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={getWhoWonState}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} reset={rematchGame} />
        )}
        <GameBoard selectedOn={handleSelectBox} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
