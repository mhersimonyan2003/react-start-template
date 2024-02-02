import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { Operation } from '@/types';
import { ModifyOperationBody, GetOperationsResult } from './types';

export const getOperations = async (pageNumber: number): Promise<GetOperationsResult> => {
  try {
    const response: AxiosResponse<GetOperationsResult> = await apiAuth.get(
      `/operations/?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: 1,
          pageNumber,
        }),
      }).toString()}`
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error getting operations:', error);
    throw error;
  }
};

export const createOperation = async (operationBody: ModifyOperationBody): Promise<Operation> => {
  try {
    const response: AxiosResponse<Operation> = await apiAuth.post('/operations/', operationBody);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error creating operation:', error);
    throw error;
  }
};

export const updateOperation = async (id: string, operationBody: ModifyOperationBody): Promise<Operation> => {
  try {
    const response: AxiosResponse<Operation> = await apiAuth.put(`/operations/${id}`, operationBody);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error creating operation:', error);
    throw error;
  }
};
