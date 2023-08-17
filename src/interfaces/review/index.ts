import { SubmissionInterface } from 'interfaces/submission';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  status: string;
  comment?: string;
  submission_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  submission?: SubmissionInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  comment?: string;
  submission_id?: string;
  user_id?: string;
}
