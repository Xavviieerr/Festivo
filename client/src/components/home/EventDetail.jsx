import React from "react";
import { useParams } from "react-router-dom";
const EventDetail = () => {
  const { eventId } = useParams();

  return (
    <div>
      <h1>Event Details</h1>
      <p>Showing details for event #{eventId}</p>
      {/* Here you can fetch data or show hardcoded details */}
    </div>
  );
};

export default EventDetail;
