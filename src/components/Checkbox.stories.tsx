import React from "react";
//import { action } from "@storybook/addon-actions";
//import { withKnobs, number } from "@storybook/addon-knobs";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Checkbox",
  //decorators: [withKnobs],
};

const Template = args => <Checkbox {...args} />;

export const JoinedBox = Template.bind({});
JoinedBox.args = {
  l: "Joined",
  c: "Green",
};

export const LeftBox = Template.bind({});
LeftBox.args = {
  l: "Left",
  c: "Red",
};