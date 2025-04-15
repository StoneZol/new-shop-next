import type { Meta, StoryObj } from '@storybook/react';

import More from './more';

const meta = {
  title: 'entities/about-product/more',
  component: More,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof More>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      data: [
        { name: 'Color', value: 'Red' },
        { name: 'Size', value: 'M' },
      ],
      category: 'Clothing',
    },
  };