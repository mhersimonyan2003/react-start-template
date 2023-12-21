import type { Meta } from '@storybook/react';

import { ProfileForm } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileForm> = {
  title: 'Example/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const UpdateProfileForm = {
  args: {
    data: {
      firstname: 'Mher',
      birthdate: '2003-06-06',
    },
  },
};
