import type { Meta, StoryObj } from "@storybook/react";
import UserInterface from "./UserInterface";

const meta: Meta<typeof UserInterface> = {
  component: UserInterface,
};

export default meta;
type Story = StoryObj<typeof UserInterface>;

export const Default: Story = {};
