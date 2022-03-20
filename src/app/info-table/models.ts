export interface User {
  key?: string;
  name?: string;
  id?: number;
  endpoint?: string;
  transferUp?: number;
  transferDown?: number;
  ip?: string;
  status?: boolean;
  handshake?: any;
}
