import React, { useState, useCallback } from 'react'
import Question from './Question.jsx';
import Summary from './Summary';
import { QUESTIONS } from '../dummy-data.js';

function Quiz() {
  const [userAnswers,setUserAnswers] = useState([]);
  const activeQuesIndex = userAnswers.length;
  const quizIsComplete = activeQuesIndex === QUESTIONS.length;

  function handleSelectedAnswer(selectedAnswer){
    setUserAnswers((prevAnswer) => {
        return [...prevAnswer,selectedAnswer];
    });
  }

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if(quizIsComplete){
    return  <Summary userAnswers={userAnswers} />
  }
  const shuffledAnswers = [...QUESTIONS[activeQuesIndex].answers]
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id='quiz'>
        <Question
        key={activeQuesIndex}
        index={activeQuesIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
        />
    </div>
  )
}

export default Quiz