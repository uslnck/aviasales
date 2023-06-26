import Filters from "../filters";
import ShowMoreButton from "../show-more-button";
import Ticket from "../ticket";
import "./ticket-list.scss";
import { useEffect } from "react";
import { fetchSearchId, fetchTickets } from "../../store/tickets-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Spin } from "antd";

function TicketList() {
  const searchId = useSelector((state: RootState) => state.tickets.searchId);
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const fetchTicketsStatus = useSelector(
    (state: RootState) => state.tickets.fetchTicketsStatus
  );
  const displayCount = useSelector(
    (state: RootState) => state.tickets.displayCount
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(fetchSearchId() as any);
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(fetchTickets() as any);
  }, [dispatch, searchId]);

  useEffect(() => {
    for (let i = 0; i < 19; i++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(fetchSearchId() as any);
    }
  }, [dispatch]);

  useEffect(() => {
    if (fetchTicketsStatus === "rejected" && searchId !== undefined)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(fetchTickets() as any);
  }, [dispatch, fetchTicketsStatus, searchId]);

  // const elements = tickets
  //   // .filter((ticket) => {
  //   //   if (filter === "") return ;
  //   //   else if (filter === "") return ;
  //   //   else if (filter === "") return ;
  //   //   else throw new Error();
  //   // })
  //   .map((ticket, i) => {
  //     return (
  //       <li key={i}>
  //         <Ticket props={{carrier, t}}/>
  //       </li>
  //     );
  //   });

  const loadingStatus = (): JSX.Element | undefined => {
    if (tickets.length === 0) return <Spin size="large" />;
  };

  return (
    <div className="ticket-container">
      <Filters />
      <ul className="ticket-list">
        {loadingStatus() ||
          tickets
            .slice(0, displayCount)
            .map((ticket, i) => <Ticket key={i} {...ticket} />)}
      </ul>
      <ShowMoreButton />
    </div>
  );
}

export default TicketList;
