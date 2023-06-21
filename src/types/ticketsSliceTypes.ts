export interface ITicketsSliceState {
  searchId: string;
  tickets: object[];
  status: string;
  error: null | string | unknown;
}
