import { Meta, StoryObj } from "@storybook/react";
import UICard from "@/ui/uicard";

const meta: Meta<typeof UICard> = {
  title: "Components/UICard",
  tags: ["autodocs"],
  component: UICard,
  argTypes: {
    className: { control: "text" },
    style: { control: "object" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof UICard>;

export const Default: Story = {
  args: {
    children: "This is a default UI Card",
  },
};

export const WithCustomStyles: Story = {
  args: {
    children: "Styled Card",
    style: { padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" },
  },
};

export const WithClassName: Story = {
  args: {
    children: "Card with custom class",
    className: "custom-class",
  },
};
