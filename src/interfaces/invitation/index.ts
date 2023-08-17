import { MarkaInterface } from 'interfaces/marka';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  role: string;
  marka_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  marka?: MarkaInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  role?: string;
  marka_id?: string;
  user_id?: string;
}
