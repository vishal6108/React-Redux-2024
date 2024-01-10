import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/event_navigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
