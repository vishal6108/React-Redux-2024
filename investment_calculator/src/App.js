import React, { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/user_input";
import Result from "./components/result";

function App() {
  const [investmentVal, setInvestmentVal] = useState({
    initialInvestment: 5000,
    annualInvestment: 600,
    expectedReturn: 3,
    duration: 10,
  });

  const inputIsValid = investmentVal.duration >= 1;

  function investmentCalculatorLogic(oldValue, updatedValue) {
    setInvestmentVal((prevVal) => {
      return {
        ...prevVal,
        [oldValue]: +updatedValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput
        userInvestment={investmentVal}
        onChange={investmentCalculatorLogic}
      />
      {!inputIsValid && (
        <p className="center21````">Duration must be greater then zero</p>
      )}
      {inputIsValid && <Result userInvestment={investmentVal} />}
    </div>
  );
}

export default App;
