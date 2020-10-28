import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Checkbox",
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