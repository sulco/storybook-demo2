import React from "react";
import { Button } from "./Button";

const parameters = {
  file: [
    "stories/button.css",
    "stories/Button.js",
    "stories/Button.stories.js",
  ],
};

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    file: [
      "stories/button.css",
      "stories/Button.js",
      "stories/Button.stories.js",
    ],
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  parameters: {
    file: [
      "stories/button.css",
      "stories/Button.js",
      "stories/Button.stories.js",
    ],
  },
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  parameters,
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  parameters,
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  parameters,
  size: "small",
  label: "Button",
};
