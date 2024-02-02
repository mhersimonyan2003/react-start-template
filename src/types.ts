import { CategoryApi } from './api/categories/types';

export interface Category extends CategoryApi {
  key: string;
  value: string;
}

export enum OperationType {
  'Profit' = 'Profit',
  'Cost' = 'Cost',
}

export interface Operation {
  id: string;
  name: string;
  desc?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  category: CategoryApi;
  type: OperationType;
}

export enum Page {
  'profile' = 'profile',
  'operations' = 'operations',
}

export interface Profile {
  id: string;
  name?: string;
  email: string;
  signUpDate: string;
}

export interface Pagination {
  pageNumber: number;
  pageSize: number;
  total: number;
}

enum SortDirection {
  'ASC' = 'ASC',
  'DESC' = 'DESC',
}

export interface Sorting<Field> {
  type: SortDirection;
  field: Field;
}
