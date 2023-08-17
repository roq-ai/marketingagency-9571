import axios from 'axios';
import queryString from 'query-string';
import { SubmissionInterface, SubmissionGetQueryInterface } from 'interfaces/submission';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSubmissions = async (
  query?: SubmissionGetQueryInterface,
): Promise<PaginatedInterface<SubmissionInterface>> => {
  const response = await axios.get('/api/submissions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSubmission = async (submission: SubmissionInterface) => {
  const response = await axios.post('/api/submissions', submission);
  return response.data;
};

export const updateSubmissionById = async (id: string, submission: SubmissionInterface) => {
  const response = await axios.put(`/api/submissions/${id}`, submission);
  return response.data;
};

export const getSubmissionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/submissions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSubmissionById = async (id: string) => {
  const response = await axios.delete(`/api/submissions/${id}`);
  return response.data;
};
