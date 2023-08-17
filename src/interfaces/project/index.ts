import { SubmissionInterface } from 'interfaces/submission';
import { MarkaInterface } from 'interfaces/marka';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  title: string;
  description: string;
  status: string;
  marka_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  submission?: SubmissionInterface[];
  marka?: MarkaInterface;
  user?: UserInterface;
  _count?: {
    submission?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  marka_id?: string;
  user_id?: string;
}
