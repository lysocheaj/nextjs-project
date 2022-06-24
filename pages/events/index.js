import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <Fragment>
        <EventsSearch />
        <EventList items={events} />
      </Fragment>
    </div>
  );
}

export default AllEventsPage;
