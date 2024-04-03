import type { Meta, StoryObj } from "@storybook/react";
import TagTable from "./TagTable";

const meta: Meta<typeof TagTable> = {
  component: TagTable,
};

export default meta;
type Story = StoryObj<typeof TagTable>;

export const Default: Story = {
  argTypes: {
    handleChangeOrder: {
      action: "handleChangeOrder",
    },
  },
  args: {
    orderByField: "name",
    orderBy: "asc",
    tags: [
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
    ],
  },
};

export const LotsOfRecords: Story = {
  argTypes: {
    handleChangeOrder: {
      action: "handleChangeOrder",
    },
  },
  args: {
    orderByField: "name",
    orderBy: "asc",
    tags: [
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
      { name: "Java", count: 1234 },
      { name: "C#", count: 1234 },
      { name: "Javascript", count: 1234 },
    ],
  },
};
