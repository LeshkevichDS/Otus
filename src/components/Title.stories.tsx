import React from "react";
import { Title } from "./Title";

export default {
  component: Title,
  title: "Title",
};

const Template = args => <Title {...args} />;

export const Followers = Template.bind({});
Followers.args = {
  t: "Followers",
};