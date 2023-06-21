import Filters from "../filters";
import ShowMoreButton from "../show-more-button";
import Ticket from "../ticket";
import "./ticket-list.scss";
import { useEffect } from "react";
import { fetchSearchId, fetchTickets } from "../../store/ticketsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

function TicketList() {
  const searchId = useSelector((state: RootState) => state.tickets.searchId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch, searchId]);

  return (
    <div className="tickets-container">
      <Filters />
      <Ticket />
      <ShowMoreButton />
    </div>
  );
}

export default TicketList;
