export enum Category {
  'sales' = 'Продажи',
  'marketing' = 'Маркетинг',
  'finance' = 'Финансы',
}

export interface Operation {
  amount: number;
  category: Category;
  title: string;
  description: string;
  date: Date;
}
