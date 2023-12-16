import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function changeHandler() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
      console.log("editing", playerName);
    }
  }

  function changeValueHandler(e) {
    setPlayerName(e.target.value);
  }

  let playerContent = <span className="player-name">{playerName}</span>;
  let btnName = "Edit";
  if (isEditing) {
    playerContent = (
      <input
        type="text"
        required
        value={playerName}
        onChange={changeValueHandler}
      />
    );
    btnName = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeHandler}>{btnName}</button>
    </li>
  );
}

export default Player;
