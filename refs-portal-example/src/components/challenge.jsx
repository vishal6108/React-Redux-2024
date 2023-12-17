import React, { useRef, useState } from 'react'
import ResultModal from './result';

function ChallengeMode({title,targetTime}) {
  const [isTimeStarted, setIsTimerStarted] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  function handleStart(){
    timer.current = setTimeout(() => {
      setIsTimerExpired(true);
      dialog.current.open();
    },targetTime * 1000);
    setIsTimerStarted(true)
  }

  function handleStop(){
    clearTimeout(timer.current)
  }
  return (
   <>
   <ResultModal ref={dialog} targetTime={targetTime} result='lost'/> 
    <section className='challenge'>
      <h2>{title}</h2>
      {isTimerExpired && <p>You Lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime >1 ? 's' : ''}
      </p>
      <p>
        <button onClick={isTimeStarted ? handleStop : handleStart}>
          {isTimeStarted ? 'Stop' : 'Start' } Challenge
        </button>
      </p>
      <p className={isTimeStarted ? 'active' : undefined}>
          {isTimeStarted ?  'Time is running...' : 'Timer inactive'}
      </p>
    </section>
   </>
  )
}

export default ChallengeMode