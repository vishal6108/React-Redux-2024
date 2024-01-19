import { Link } from "react-router-dom";

import meetupImg from "../../assets/meetup.jpg";

export default function EventsIntroSection() {
  return (
    <section
      className="content-section"
      id="overview-section"
      style={{ backgroundImage: `url(${meetupImg})` }}
    >
      <h2>
        Connect with amazing people <br />
        or <strong>find a new passion</strong>
      </h2>
      <p>Anyone can organize and join events on TechWebinar!</p>
      <p>
        <Link to="/events/new" className="button">
          Create Your Event
        </Link>
      </p>
    </section>
  );
}
