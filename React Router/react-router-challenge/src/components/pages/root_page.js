import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar";

function RootPage() {
  // const navigation = useNavigation();
  return (
    <>
      <NavBar />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
