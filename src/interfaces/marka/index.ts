import { InvitationInterface } from 'interfaces/invitation';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MarkaInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  invitation?: InvitationInterface[];
  project?: ProjectInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
    project?: number;
  };
}

export interface MarkaGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
