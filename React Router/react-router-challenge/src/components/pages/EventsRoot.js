import { Outlet } from "react-router-dom";

import EventsNavigation from "../eventNavigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
