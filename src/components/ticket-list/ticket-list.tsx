import Filters from "../filters";
import ShowMoreButton from "../show-more-button";
import Ticket from "../ticket";
import "./ticket-list.scss";
import { useEffect } from "react";
import { fetchSearchId, fetchTickets } from "../../store/tickets-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

function TicketList() {
  const searchId = useSelector((state: RootState) => state.tickets.searchId);
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch, searchId]);

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

  // let startIndex = 0;
  // const mapElements = (): any => {
  //   const elements = tickets.slice(startIndex, startIndex + 5);
  //   startIndex += 5;
  //   elements.forEach((ticket) => {
  //     return (
  //       <Ticket
  //         // key={i}
  //         {...ticket}
  //         props={[ticket.carrier, ticket.price, ticket.segments]}
  //       />
  //     );
  //   });
  // };

  return (
    <div className="ticket-container">
      <Filters />
      <ul className="ticket-list">
        {/* {mapElements()} */}
        {tickets.map((ticket, i) => (
          <Ticket key={i} {...ticket} />
        ))}
      </ul>
      <ShowMoreButton />
    </div>
  );
}

export default TicketList;
