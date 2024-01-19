import { useIsFetching } from "@tanstack/react-query";
import React from "react";

function Header({ children }) {
  const fetching = useIsFetching();
  return (
    <>
      <div id="main-header-loading">{fetching > 0 && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1>TechWebinar</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}

export default Header;
