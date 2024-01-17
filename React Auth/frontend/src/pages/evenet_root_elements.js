import React from "react";
import EventNavigation from "../components/event_navigation";
import { Outlet } from "react-router-dom";

function EventRootLayout() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
}

export default EventRootLayout;
