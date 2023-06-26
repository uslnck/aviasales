import { ITicket } from ".";

export interface ITicketsSliceState {
  searchId: string[];
  tickets: ITicket[];
  searchIdError: null | string | unknown;
  ticketsError: null | string | unknown;
  displayCount: number;
  fetchTicketsStatus: string;
  searchIdStatus: string;
  [key: string]: any;
}
