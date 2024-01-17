import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

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
