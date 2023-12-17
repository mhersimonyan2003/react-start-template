import type { Meta } from '@storybook/react';

import { AuthForm } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AuthForm> = {
  title: 'Example/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainAuthForm = {};
