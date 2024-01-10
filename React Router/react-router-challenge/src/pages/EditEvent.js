import { useRouteLoaderData } from "react-router-dom";
import EventFormPage from "../components/event_form";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  console.log("======editEvent========", data);
  return (
    <>
      <EventFormPage method="PATCH" event={data.event} />
    </>
  );
}

export default EditEventPage;
