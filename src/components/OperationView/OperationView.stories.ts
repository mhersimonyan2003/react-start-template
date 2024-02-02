import type { Meta } from '@storybook/react';
import { OperationType } from '@/types';

import { OperationView } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationView> = {
  title: 'Example/OperationView',
  component: OperationView,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'number' },
    category: { control: 'text' },
    name: { control: 'text' },
    desc: { control: 'text' },
    createdAt: { control: 'text' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainOperationView = {
  args: {
    amount: 100.0,
    categoryId: '6515abc8351375825319dcc5',
    name: 'Покупка продуктов',
    desc: 'Покупка продуктов в местном супермаркете.',
    date: '2023-09-19T10:37:16.389',
    type: OperationType.Cost,
  },
};
