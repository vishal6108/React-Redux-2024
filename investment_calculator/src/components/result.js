import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ userInvestment }) {
  const resultValue = calculateInvestmentResults(userInvestment);
  const initialInvestment =
    resultValue[0].valueEndOfYear -
    resultValue[0].interest -
    resultValue[0].annualInvestment;
  console.log(resultValue);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultValue.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalInvestedCaptial = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCaptial)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
