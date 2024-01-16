import { Pagination, Sorting } from '@/types';

export interface CategoryApi {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
}

export interface GetCategoriesResult {
  data: Array<CategoryApi>;
  pagination: Pagination;
  sorting: Sorting<keyof CategoryApi>;
}
