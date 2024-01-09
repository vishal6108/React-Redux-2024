import { useLoaderData } from "react-router-dom";
import EventFormPage from "../eventform";

function EditEventPage() {
  const data = useLoaderData();
  return (
    <>
      <EventFormPage event={data.event} />
    </>
  );
}

export default EditEventPage;
