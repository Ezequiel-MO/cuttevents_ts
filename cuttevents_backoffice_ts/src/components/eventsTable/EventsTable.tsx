import { FC } from "react";
import EventList from "./EventList";
import Pagination from "./Pagination";

const EventsTable: FC = () => {
  return (
    <>
      <EventList />
      <Pagination />
    </>
  );
};

export default EventsTable;
