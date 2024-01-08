import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
// import cssClass from "./root.module.css";

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
