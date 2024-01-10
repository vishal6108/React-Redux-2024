import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav_bar";

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
