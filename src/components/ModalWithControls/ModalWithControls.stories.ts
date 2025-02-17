import type { Meta } from '@storybook/react';
import { ModalWithControls } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalWithControls> = {
  title: 'Example/ModalWithControls',
  component: ModalWithControls,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainModalWithControls = {
  args: {
    visible: false,
    children: 'ModalText',
  },
};
