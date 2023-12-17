import type { Meta } from '@storybook/react';

import { OperationForm } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationForm> = {
  title: 'Example/OperationForm',
  component: OperationForm,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AddOperationForm = {};

export const EditOperationForm = {
  args: {
    data: {
      title: 'Edit title',
      description: 'This is the Edit Operation Form',
    },
  },
};
