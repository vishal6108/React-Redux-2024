import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/event_form_page";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
