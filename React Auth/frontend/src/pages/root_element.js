import React, { useEffect } from "react";
import { Outlet, useRouteLoaderData, useSubmit } from "react-router-dom";
import NavBarPage from "../components/navbar";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  const submit = useSubmit();
  const token = useRouteLoaderData("root");
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { method: "POST", action: "/logout" });
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { method: "POST", action: "/logout" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <NavBarPage />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
