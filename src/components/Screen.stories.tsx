import React from "react";
import { Screen } from "./Screen";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Screen",
  decorators: [withKnobs],
};

export const DefaultScreen = () => [
  <Screen />
];