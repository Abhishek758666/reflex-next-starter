import UIButton from "@/ui/uibutton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UIButton> = {
  title: "Components/UIButton",
  tags: ["autodocs"],
  component: UIButton,
  argTypes: {
    type: {
      control: "select",
      options: [
        "primary",
        "error",
        "plain",
        "warning",
        "success",
        "secondary",
        "detail",
      ],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof UIButton>;

export const Default: Story = {
  args: {
    label: "Default Button",
    type: "warning",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Button",
    type: "primary",
  },
};

export const Error: Story = {
  args: {
    label: "Error Button",
    type: "error",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Button",
    type: "warning",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    type: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    type: "plain",
    disabled: true,
  },
};

export const LinkButton: Story = {
  args: {
    label: "Go to Google",
    href: "https://google.com",
    type: "primary",
    target: "_blank",
  },
};
