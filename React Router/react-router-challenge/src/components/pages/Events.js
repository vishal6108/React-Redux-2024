import { json, useLoaderData } from "react-router-dom";
import EventsList from "../eventList";

// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event",
//   },
//   {
//     id: "e2",
//     title: "Another event",
//   },
// ];

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return (
    // <>
    //   <h1>EventsPage</h1>
    //   <ul>
    //     {DUMMY_EVENTS.map((event) => (
    //       <li key={event.id}>
    //         <Link to={event.id}>{event.title}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </>
    <EventsList events={events} />
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not found event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
