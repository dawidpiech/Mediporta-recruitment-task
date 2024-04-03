import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: "Error 404: Message from error ",
    borderColor: "#e68e8e",
    fontColor: "#333",
  },
};

export const Message: Story = {
  args: {
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut dolorum odio.",
    borderColor: "#75ddc3",
    fontColor: "#303b6b",
  },
};
