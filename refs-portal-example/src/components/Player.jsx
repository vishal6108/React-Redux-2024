import React, { useRef, useState } from "react";

function Player() {
  const [userName, setUserName] = useState(null);
  const playerName = useRef();
  //   const [isSubmitted, setIsSubmitted] = useState(false);
  //   const changeHandler = (e) => {
  //     setIsSubmitted(false);
  //     setUserName(e.target.value);
  //   };
  const onSubmitHandler = () => {
    // setIsSubmitted(true);
    setUserName(playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          //   onChange={changeHandler}
          //   value={userName}
        />
        <button onClick={onSubmitHandler}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
