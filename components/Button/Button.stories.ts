import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    size: {
      options: ["small", "normal"],
      control: { type: "select" },
    },

    bgColor: {
      options: ["black", "white"],
      control: { type: "select" },
    },
    disabled: {
      options: [true, false],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "normal",
    bgColor: "white",
    children: "로그인",
    disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=299-3567&m=dev`,
    },
  },
};
