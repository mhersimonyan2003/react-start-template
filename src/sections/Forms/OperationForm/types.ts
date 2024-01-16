export enum OperationFormType {
  'add' = 'add',
  'update' = 'update',
}

export enum OperationType {
  'Profit' = 'Profit',
  'Cost' = 'Cost',
}

export interface OperationFormData {
  name: string;
  desc?: string;
  amount: number;
  type: OperationType;
  categoryId: string;
}
