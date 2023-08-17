import { ReviewInterface } from 'interfaces/review';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SubmissionInterface {
  id?: string;
  status: string;
  feedback?: string;
  project_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {
    review?: number;
  };
}

export interface SubmissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  feedback?: string;
  project_id?: string;
  user_id?: string;
}
