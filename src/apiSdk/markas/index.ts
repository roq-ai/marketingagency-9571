import axios from 'axios';
import queryString from 'query-string';
import { MarkaInterface, MarkaGetQueryInterface } from 'interfaces/marka';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMarkas = async (query?: MarkaGetQueryInterface): Promise<PaginatedInterface<MarkaInterface>> => {
  const response = await axios.get('/api/markas', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMarka = async (marka: MarkaInterface) => {
  const response = await axios.post('/api/markas', marka);
  return response.data;
};

export const updateMarkaById = async (id: string, marka: MarkaInterface) => {
  const response = await axios.put(`/api/markas/${id}`, marka);
  return response.data;
};

export const getMarkaById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/markas/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMarkaById = async (id: string) => {
  const response = await axios.delete(`/api/markas/${id}`);
  return response.data;
};
