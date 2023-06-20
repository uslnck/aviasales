import Filters from "../filters";
import ShowMoreButton from "../show-more-button";
import Ticket from "../ticket";
import "./ticket-list.scss";

function TicketList() {
  return (
    <div className="tickets-container">
      <Filters />
      <Ticket />
      <ShowMoreButton />
    </div>
  );
}

export default TicketList;
