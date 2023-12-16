import React from "react";

function Header() {
  const title = "Investment Calculator";
  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png" alt="nothing" />
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default Header;
