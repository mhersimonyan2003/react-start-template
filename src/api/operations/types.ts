import { Operation, OperationType, Pagination, Sorting } from '@/types';

export interface GetOperationsResult {
  data: Array<Operation>;
  pagination: Pagination;
  sorting: Sorting<keyof Operation>;
}

export interface ModifyOperationBody {
  name: string;
  desc?: string;
  date: string;
  amount: number;
  categoryId: string;
  type: OperationType;
}
