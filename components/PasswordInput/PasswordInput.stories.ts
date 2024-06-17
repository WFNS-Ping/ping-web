import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PasswordInput from "@/components/PasswordInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PasswordInput",
  component: PasswordInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: "PasswordInput",
    value: "",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=383-3492&m=dev`,
    },
  },
};
