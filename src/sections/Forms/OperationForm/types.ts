import { Category } from '@/types';

export interface OperationFormData {
  title: string;
  amount: number;
  description: string;
  category: Category;
}

export enum OperationFormType {
  'add' = 'add',
  'update' = 'update',
}
