import { OperationType } from '@/types';

export const OPERATION_FORM_TYPES: Array<Record<'key' | 'value', keyof typeof OperationType>> = [
  { key: 'Profit', value: 'Profit' },
  { key: 'Cost', value: 'Cost' },
];
