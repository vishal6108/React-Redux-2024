import React from "react";

function UserInput({ userInvestment, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInvestment.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            required
          />
        </p>

        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInvestment.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={userInvestment.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInvestment.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
