import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar";

function RootPage() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
