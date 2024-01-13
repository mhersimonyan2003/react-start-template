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

export enum Page {
  'profile' = 'profile',
  'operations' = 'operations',
}

export interface Profile {
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  birthdate: string;
}
