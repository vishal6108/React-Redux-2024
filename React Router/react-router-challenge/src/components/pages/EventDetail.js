import { json, useLoaderData } from "react-router-dom";
import EventItem from "../eventItem";

function EventDetailPage() {
  // const params = useParams();
  const data = useLoaderData();

  return (
    <>
      {/* <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p> */}
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ req, params }) {
  const id = params.eventId;
  const res = await fetch("http://localhost:8080/events/" + id);

  if (!res.ok) {
    throw json(
      { message: "Could not found event id detail." },
      {
        status: 500,
      }
    );
  } else {
    return res;
  }
}
