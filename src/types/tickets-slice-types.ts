import { ITicket } from ".";

export interface ITicketsSliceState {
  searchId: string;
  tickets: ITicket[];
  status: string;
  searchIdError: null | string | unknown;
  ticketsError: null | string | unknown;
}
