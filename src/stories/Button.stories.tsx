import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../@ibti/components";

const meta = {
  title: "Docs/Button",
  component: Button,
} as Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Dynamic: Story = {
  args: {
    children: "Default",
    variant: "default",
    size: "lg",
  },
};
